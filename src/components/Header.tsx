import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from '@/components/Button'
import { Modal } from '@/components/Modal'

const HeaderWrapper = styled.div`
  background: #4d4d4d;
  min-height: var(--header);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`

export const Header: React.FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false)

  const closeMapHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault()
    setIsLogin(false)
  }

  return (
    <HeaderWrapper>
      <Modal show={isLogin} header="!2312312">
        <div className="map-container">
          <h2>The Map!</h2>
        </div>
      </Modal>
      <h3 className="tw-text-white">Todo List</h3>
      {isLogin ? (
        <p>qweqweqwe</p>
      ) : (
        <Button onClick={() => setIsLogin(true)}>Login</Button>
      )}
    </HeaderWrapper>
  )
}
