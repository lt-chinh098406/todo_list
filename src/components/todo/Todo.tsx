import styled from 'styled-components'
import { TodoColumn } from '@/components/todo/TodoColumn'
import TodoColumnModel from '@/models/TodoColumn'
import { Button } from '@/components/Button'

const TodoWrapper = styled.div`
  min-height: 100%;
  background-color: #dfe6f5;
  flex: 1;
`

export const columns: TodoColumnModel[] = [
  {
    value: 1,
    label: 'New',
  },
  {
    value: 2,
    label: 'In-progress',
  },
  {
    value: 3,
    label: 'Done',
  },
  {
    value: 4,
    label: 'Close',
  },
]

export const Todo = () => {
  return (
    <TodoWrapper>
      <div className="tw-flex tw-justify-between tw-m-4">
        <h1>Todo List</h1>
        <Button>Add todo</Button>
      </div>
      <TodoColumn columns={columns} />
    </TodoWrapper>
  )
}
