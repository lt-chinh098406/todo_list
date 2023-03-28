import styled from 'styled-components'
import TodoColumnModel from '@/models/TodoColumn'

const TodoColumnWrapper = styled.div`
  width: 440px;
  height: 100%;
  background-color: white;
  padding: 30px;
  border-radius: 50px;
`

interface TodoColumnProps {
  columns: TodoColumnModel[]
}

export const TodoColumn = ({ columns }: TodoColumnProps) => {
  return (
    <div className="tw-flex tw-h-full tw-gap-[20px] tw-bg-[#f2f6fe] tw-p-5">
      {columns.map((column) => (
        <TodoColumnWrapper key={column.value}>{column.label}</TodoColumnWrapper>
      ))}
    </div>
  )
}
