import styled from 'styled-components'
import { Card } from '@/components/Card'
import { Todo } from '@/models/Todo'
import { Modal } from '@/components/Modal'
import { useState } from 'react'
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
  addTodo?: (values: Todo) => void
  updateTodo?: (values: Todo) => void
  deleteTodo?: (id: string) => void
}

export const TodoItem: React.FC<TodoItemProps> = ({
  todos,
  addTodo,
  updateTodo,
  deleteTodo,
}) => {
  const [showPopup, setShowPopup] = useState<boolean>(false)
  const [todoItem, setTodoItem] = useState<Todo>({
    id: '',
    title: '',
    description: '',
    properties: [],
    statusId: 1,
  })

  const openPopup = (todo: Todo): void => {
    setShowPopup(true)
    setTodoItem(todo)
  }

  const closePopup = (): void => {
    setShowPopup(false)
  }
  return (
    <TodoItemWrapper>
      {todos.map((todo) => (
        <Card key={todo.id} onClick={() => openPopup(todo)}>
          <h3>{todo.title}</h3>
          <h3>{todo.description}</h3>
        </Card>
      ))}

      <Modal show={showPopup} header="Todo" onClose={closePopup}>
        <TodoForm
          status="update"
          onClose={closePopup}
          value={todoItem}
          addTodo={addTodo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      </Modal>
    </TodoItemWrapper>
  )
}
