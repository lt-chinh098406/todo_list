import { createContext, useReducer, useEffect, useContext } from 'react'
import { authReducer } from '../reducers/authReducer'
import { apiUrl, LOCAL_STORAGE_TOKEN_NAME } from '@/context/contants'
import axios from 'axios'
import setAuthToken from '@/utils/setAuthtoken'
import { Login } from '@/models/Login'
import { AuthState } from '@/models/Auth'

interface AuthContextData {
  loginUser: (
    userForm: Login
  ) => Promise<{ success: boolean; message?: string }>
  logoutUser: () => void
  authState: AuthState
}

const AuthContextDefaultValue = {
  loginUser: async () => ({ success: false }),
  logoutUser: () => {},
  authState: {
    authLoading: true,
    isAuthenticated: false,
    user: null,
  },
}

export const AuthContext = createContext<AuthContextData>(
  AuthContextDefaultValue
)

interface AuthContextProps {
  children: React.ReactNode
}

export const AuthProvider = ({ children }: AuthContextProps): any => {
  const [authState, dispatch] = useReducer(authReducer, {
    authLoading: true,
    isAuthenticated: false,
    user: null,
  })

  // Authenticate user
  const loadUser = async () => {
    if (localStorage[LOCAL_STORAGE_TOKEN_NAME]) {
      setAuthToken(localStorage[LOCAL_STORAGE_TOKEN_NAME])
    }

    try {
      const response = await axios.get(`${apiUrl}/auth/me`)
      if (response.data.success) {
        dispatch({
          type: 'SET_AUTH',
          payload: { isAuthenticated: true, user: response.data.user },
        })
      }
    } catch (error) {
      localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME)
      setAuthToken(null)
      dispatch({
        type: 'SET_AUTH',
        payload: { isAuthenticated: false, user: null },
      })
    }
  }

  useEffect(() => {
    void loadUser()
  }, [])

  // Login
  const loginUser = async (userForm: Login) => {
    try {
      const response = await axios.post(`${apiUrl}/auth/login`, userForm)
      if (response.data.success)
        localStorage.setItem(
          LOCAL_STORAGE_TOKEN_NAME,
          response.data.accessToken
        )

      await loadUser()

      return response.data
    } catch (error: any) {
      if (error.response.data) return error.response.data
      else return { success: false, message: error.message }
    }
  }

  // Logout
  const logoutUser = () => {
    localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME)
    dispatch({
      type: 'SET_AUTH',
      payload: { isAuthenticated: false, user: null },
    })
  }

  // Context data
  const authContextData = { loginUser, logoutUser, authState }

  // Return provider
  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  )
}
