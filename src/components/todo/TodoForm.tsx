// import styled from 'styled-components'
import { Input } from '@/components/Inputs'
import { TextArea } from '@/components/TextArea'
import { columns } from '@/components/todo/Todo'
import { Select } from '@/components/Select'
import { PlusCircleIcon } from '@heroicons/react/24/outline'
import { v4 } from 'uuid'
import { useState } from 'react'

interface Properties {
  id: string
  value: string
}

interface TodoFormProps {}

export const TodoForm: React.FC = ({}) => {
  const [properties, setProperties] = useState<Properties[]>([
    {
      id: '1',
      value: '123',
    },
  ])

  const addProperty = (
    event: React.MouseEvent<HTMLOrSVGElement, MouseEvent>
  ) => {
    event.preventDefault()
    setProperties((prev) => [
      ...prev,
      {
        id: `temp_${v4()}`,
        value: '123',
      },
    ])
  }

  return (
    <form>
      <Input
        id="title"
        type="text"
        label="Title :"
        placeholder="Please input title todo"
      />
      <TextArea
        id="description"
        label="Description :"
        placeholder="Please input description todo"
      />
      <Select id="status" label="Status :" options={columns} defaultValue={1} />
      <div className="tw-w-full">
        {properties.map((property, index) => (
          <Input
            key={property.id}
            id="property.id"
            label={!index ? 'Properties :' : ''}
            value={property.value}
            type="text"
            placeholder="Please input title todo"
          />
        ))}
        {properties.length < 3 && (
          <div className="tw-w-full tw-flex tw-justify-center">
            <PlusCircleIcon
              className="tw-h-10 tw-w-10 tw-cursor-pointer"
              onClick={addProperty}
            />
          </div>
        )}
      </div>
    </form>
  )
}
