import styled from 'styled-components'
import { Card } from '@/components/Card'
import { Todo } from '@/models/Todo'
import { Modal } from '@/components/Modal'
import { useState } from 'react'
import { Button } from '@/components/Button'
import { TodoForm } from '@/components/todo/TodoForm'

const TodoItemWrapper = styled.div`
  min-height: 100vh;
  background-color: white;
  border-radius: 20px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  cursor: pointer;
`

interface TodoItemProps {
  todos: Todo[]
}

export const TodoItem: React.FC<TodoItemProps> = ({ todos }) => {
  const [showPopup, setShowPopup] = useState<boolean>(false)

  const openPopup = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    event.preventDefault()
    setShowPopup(true)
  }

  const closePopup = (
    event: React.MouseEvent<HTMLOrSVGElement, MouseEvent>
  ): void => {
    event.preventDefault()
    setShowPopup(false)
  }

  return (
    <TodoItemWrapper>
      {todos.map((todo) => (
        <Card key={todo.id} onClick={openPopup}>
          <h3>{todo.title}</h3>
          <h3>{todo.description}</h3>
        </Card>
      ))}

      <Modal
        show={showPopup}
        header="Todo"
        onClose={closePopup}
        footer={<Button onClick={closePopup}>CLOSE</Button>}
      >
        <TodoForm />
      </Modal>
    </TodoItemWrapper>
  )
}
