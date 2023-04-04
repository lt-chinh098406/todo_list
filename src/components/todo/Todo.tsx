import styled from 'styled-components'
import TodoColumnModel from '@/models/TodoColumn'
import { TodoItem } from '@/components/todo/TodoItem'
import { defaultListTodo } from '@/factory/todo'
import { useState } from 'react'
import { Todo } from '@/models/Todo'
import { Button } from '@/components/Button'
import { Modal } from '@/components/Modal'
import { TodoForm } from '@/components/todo/TodoForm'
import { initialTodo } from '@/factory/todo'
import { InitialColumn } from '@/factory/column'

const TodoWrapper = styled.div`
  min-height: 100%;
  background-color: #dfe6f5;
  flex: 1;
`

const TodoColumnWrapper = styled.div`
  width: 25%;
  min-height: 100vh;
  background-color: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
`

export const TodoList = () => {
  const [columns, setColumns] = useState<TodoColumnModel[]>(InitialColumn)
  const [listTodo, setListTodo] = useState<Todo[]>(defaultListTodo)
  const [showPopup, setShowPopup] = useState<boolean>(false)
  const onAddTodo = (values: Todo): void => {
    setListTodo([...listTodo, values])
  }

  const onUpdateTodo = (values: Todo): void => {
    const updatedTodos = listTodo.map((todo) =>
      todo.id === values.id ? values : todo
    )
    setListTodo(updatedTodos)
  }

  const onDeleteTodo = (id: string): void => {
    setListTodo(listTodo.filter((todo) => todo.id !== id))
  }

  const openPopup = (): void => {
    setShowPopup(true)
  }

  const closePopup = (): void => {
    setShowPopup(false)
  }

  return (
    <TodoWrapper>
      <div className="tw-flex tw-justify-between tw-m-4">
        <h1>Todo List</h1>
        <Button onClick={openPopup}>Add todo</Button>
      </div>
      <div className="tw-flex tw-h-full tw-gap-[20px] tw-p-5">
        {columns.map((column) => (
          <TodoColumnWrapper key={column.value}>
            <h3 className="tw-p-6 tw-font-bold tw-text-lg tw-text-center tw-text-[#4d1894]">
              {column.label}
            </h3>
            <TodoItem
              todos={listTodo.filter((todo) => todo.statusId === column.value)}
              addTodo={onAddTodo}
              updateTodo={onUpdateTodo}
              deleteTodo={onDeleteTodo}
            />
          </TodoColumnWrapper>
        ))}
      </div>

      <Modal show={showPopup} header="Add Todo" onClose={closePopup}>
        <TodoForm
          status="create"
          onClose={closePopup}
          value={initialTodo}
          addTodo={onAddTodo}
        />
      </Modal>
    </TodoWrapper>
  )
}
