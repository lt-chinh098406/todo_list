import styled from 'styled-components'
import { TodoColumn } from '@/components/todo/TodoColumn'
import TodoColumnModel from '@/models/TodoColumn'

const TodoWrapper = styled.div`
  height: 100%;
  background-color: white;
  border-radius: 50px;
`

const columns: TodoColumnModel[] = [
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
      <div className="tw-flex tw-justify-between tw-mb-6">
        <h1>Todo List</h1>
        <button className="tw-bg-[#754BE5] tw-rounded-full tw-w-[120px] tw-text-white">
          Add todo
        </button>
      </div>
      <TodoColumn columns={columns} />
    </TodoWrapper>
  )
}
