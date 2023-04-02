import { columns } from '@/components/todo/Todo'
import { SelectField } from '@/components/Select'
import { PlusCircleIcon } from '@heroicons/react/24/outline'
import { FastField, Form, Formik } from 'formik'
import { Button } from '@/components/Button'
import { v4 } from 'uuid'
import { Todo } from '@/models/Todo'
import { Input } from '@/components/Inputs'
import { TextArea } from '@/components/TextArea'

const initialValues: Todo = {
  id: '',
  title: '',
  description: '',
  statusId: 0,
  properties: [
    {
      id: '1',
      value: '123',
    },
  ],
}

export const TodoForm: React.FC = ({}) => {
  // const addProperty = (
  //   event: React.MouseEvent<HTMLOrSVGElement, MouseEvent>
  // ) => {
  //   event.preventDefault()
  //   setProperties((prev: any) => [
  //     ...prev,
  //     {
  //       id: `temp_${v4()}`,
  //       value: '123',
  //     },
  //   ])
  // }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
    >
      {() => {
        return (
          <Form>
            <FastField
              name="title"
              component={Input}
              type="text"
              label="Title :"
              placeholder="Eg: Wow nature ..."
            />
            <FastField
              name="description"
              component={TextArea}
              label="Description :"
              placeholder="Eg: Some thing ..."
            />
            <FastField
              name="statusId"
              options={columns}
              component={SelectField}
              label="Status :"
            />
            {/* <div className="tw-w-full">
            {properties.map((property: any, index: number) => (
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
          </div> */}
            <Button type="submit">Submit Form</Button>
          </Form>
        )
      }}
    </Formik>
  )
}
