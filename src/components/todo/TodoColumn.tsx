import styled from 'styled-components'
import TodoColumnModel from '@/models/TodoColumn'
import { TodoItem } from '@/components/todo/TodoItem'
import { Todo } from '@/models/Todo'

const TodoColumnWrapper = styled.div`
  width: 25%;
  min-height: 100vh;
  background-color: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
`

interface TodoColumnProps {
  columns: TodoColumnModel[]
}

const todos = [
  {
    id: '1',
    title: 'Learn Nodejs',
    description: 'coding API todo list',
    statusId: 1,
    properties: [
      'Learn Express',
      'Learn MongoDB + Mongoose',
      'Learn Config source base',
      'Learn Docker + CI/CD',
    ],
    creator: 'u1',
  },
  {
    id: '2',
    title: 'Learn Nodejs 2',
    description: 'coding API todo list',
    statusId: 2,
    properties: [
      'Learn Express',
      'Learn MongoDB + Mongoose',
      'Learn Config source base',
      'Learn Docker + CI/CD',
    ],
    creator: 'u1',
  },
  {
    id: '3',
    title: 'Learn Nodejs 3',
    description: 'coding API todo list',
    statusId: 3,
    properties: [
      'Learn Express',
      'Learn MongoDB + Mongoose',
      'Learn Config source base',
      'Learn Docker + CI/CD',
    ],
    creator: 'u1',
  },
  {
    id: '4',
    title: 'Learn Nodejs 4',
    description: 'coding API todo list',
    statusId: 4,
    properties: [
      'Learn Express',
      'Learn MongoDB + Mongoose',
      'Learn Config source base',
      'Learn Docker + CI/CD',
    ],
    creator: 'u1',
  },
  {
    id: '5',
    title: 'Learn Nodejs 5',
    description: 'coding API todo list',
    statusId: 3,
    properties: [
      'Learn Express',
      'Learn MongoDB + Mongoose',
      'Learn Config source base',
      'Learn Docker + CI/CD',
    ],
    creator: 'u1',
  },
  {
    id: '6',
    title: 'Learn Nodejs 6',
    description: 'coding API todo list',
    statusId: 2,
    properties: [
      'Learn Express',
      'Learn MongoDB + Mongoose',
      'Learn Config source base',
      'Learn Docker + CI/CD',
    ],
    creator: 'u1',
  },
]

export const TodoColumn = ({ columns }: TodoColumnProps) => {
  return (
    <div className="tw-flex tw-h-full tw-gap-[20px] tw-p-5">
      {columns.map((column) => (
        <TodoColumnWrapper key={column.value}>
          <h3 className="tw-p-6 tw-font-bold tw-text-lg tw-text-center tw-text-[#4d1894]">
            {column.label}
          </h3>
          <TodoItem
            todos={todos.filter((todo) => todo.statusId === column.value)}
          />
        </TodoColumnWrapper>
      ))}
    </div>
  )
}
