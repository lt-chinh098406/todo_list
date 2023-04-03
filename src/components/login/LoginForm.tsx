import { FastField, Form, Formik } from 'formik'
import { Button } from '@/components/Button'
import { Login } from '@/models/Login'
import { Input } from '@/components/Input'
import * as Yup from 'yup'
import styled from 'styled-components'
import { useContext } from 'react'
import { AuthContext } from '@/context/AuthProvider'
import { isJsxClosingElement } from 'typescript'

const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
`

const initialValues: Login = {
  email: '',
  password: '',
}

const TodoScheme = Yup.object().shape({
  email: Yup.string().email('Not a proper email').required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be 8 characters long')
    .matches(/[0-9]/, 'Password requires a number')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .matches(/[A-Z]/, 'Password requires an uppercase letter')
    .matches(/[^\w]/, 'Password requires a symbol'),
})

export const LoginForm: React.FC = ({}) => {
  const { loginUser } = useContext(AuthContext)

  const login = async (event: any, values: Login) => {
    event.preventDefault()

    try {
      const loginData = await loginUser(values)
      console.log(loginData)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <LoginWrapper>
      <Formik
        initialValues={initialValues}
        validationSchema={TodoScheme}
        onSubmit={(values) => login(event, values)}
      >
        {({ errors, touched }) => {
          return (
            <Form className="tw-min-w-[400px]">
              <FastField
                name="email"
                component={Input}
                type="text"
                label="Email :"
                placeholder="Please input email title ..."
              />
              {errors.email && touched.email ? (
                <span className="tw-text-red-500 tw-ml-[130px]">
                  {errors.email}
                </span>
              ) : null}
              <FastField
                name="password"
                component={Input}
                label="Password :"
                placeholder="Please input password description ..."
              />
              {errors.password && touched.password ? (
                <span className="tw-text-red-500 tw-ml-[130px]">
                  {errors.password}
                </span>
              ) : null}
              <div className="tw-mt-4 tw-text-center">
                <Button type="submit">Login</Button>
              </div>
            </Form>
          )
        }}
      </Formik>
    </LoginWrapper>
  )
}
