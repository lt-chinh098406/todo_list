import { InitialColumn } from '@/factory/column'
import { SelectField } from '@/components/Select'
import { PlusCircleIcon, MinusCircleIcon } from '@heroicons/react/24/outline'
import { FieldArray, FastField, Form, Formik, FormikErrors } from 'formik'
import { Button } from '@/components/Button'
import { Todo, Property } from '@/models/Todo'
import { Input } from '@/components/Input'
import { TextArea } from '@/components/TextArea'
import * as Yup from 'yup'
import { defaultListTodo, defaultProperty } from '@/factory/todo'
import { v4 } from 'uuid'

const TodoScheme = Yup.object().shape({
  title: Yup.string().max(255).required('Title is required'),
  description: Yup.string().max(255).required('Description is required'),
  statusId: Yup.number().required('Status is required'),
  properties: Yup.array()
    .of(
      Yup.object().shape({
        value: Yup.string().required('Property is required'),
      })
    )
    .required('Must have properties'),
})

interface TodoFromProps {
  value: Todo
  status: string
  onClose: () => void
  addTodo?: (values: Todo) => void
  updateTodo?: (values: Todo) => void
  deleteTodo?: (id: string) => void
}

export const TodoForm: React.FC<TodoFromProps> = ({
  value,
  status,
  onClose,
  addTodo,
  updateTodo,
  deleteTodo,
}) => {
  const addProperty = (
    event: React.MouseEvent<HTMLOrSVGElement, MouseEvent>,
    push: (defaultProperty: Property) => void
  ): void => {
    event.preventDefault()
    push(defaultProperty)
  }

  const removeProperty = (
    event: React.MouseEvent<HTMLOrSVGElement, MouseEvent>,
    remove: (index: number) => void,
    index: number
  ): void => {
    event.preventDefault()
    remove(index)
  }

  const handleSubmitForm = (values: Todo) => {
    if (status === 'create') {
      addTodo!(values)
    } else {
      updateTodo!(values)
    }

    onClose()
  }

  const onDeleteTodo = (id: string): void => {
    deleteTodo!(id)

    onClose()
  }

  return (
    <Formik
      initialValues={{
        id: value.id,
        title: value.title,
        description: value.description,
        statusId: value.statusId,
        properties: value.properties,
      }}
      validationSchema={TodoScheme}
      onSubmit={handleSubmitForm}
    >
      {({ values, errors, touched }) => {
        return (
          <Form>
            <FastField
              name="title"
              component={Input}
              type="text"
              label="Title :"
              placeholder="Please input todo title ..."
            />
            {errors.title && touched.title ? (
              <span className="tw-text-red-500 tw-ml-[130px]">
                {errors.title}
              </span>
            ) : null}
            <FastField
              name="description"
              component={TextArea}
              label="Description :"
              placeholder="Please input todo description ..."
            />
            {errors.description && touched.description ? (
              <span className="tw-text-red-500 tw-ml-[130px]">
                {errors.description}
              </span>
            ) : null}
            <FastField
              name="statusId"
              options={InitialColumn}
              component={SelectField}
              label="Status :"
            />
            <FieldArray name="properties">
              {({ insert, remove, push }) => (
                <div className="tw-w-full">
                  {values.properties.length > 0 &&
                    values.properties.map((property, index) => (
                      <div key={index}>
                        <div className="tw-flex tw-items-center">
                          <FastField
                            name={`properties.${index}.value`}
                            component={Input}
                            type="text"
                            label={!index ? 'Properties :' : ''}
                            placeholder="Please input todo property ..."
                          />
                          {!index ? (
                            <div className="tw-h-6 tw-w-6"></div>
                          ) : (
                            <MinusCircleIcon
                              className="tw-h-6 tw-w-6 tw-cursor-pointer"
                              onClick={(event) =>
                                removeProperty(event, remove, index)
                              }
                            />
                          )}
                        </div>
                        {(errors?.properties as FormikErrors<Property>[])?.[
                          index
                        ]?.value &&
                          (touched?.properties as FormikErrors<Property>[])?.[
                            index
                          ]?.value && (
                            <span className="tw-text-red-500 tw-ml-[130px]">
                              {
                                (
                                  errors?.properties as FormikErrors<Property>[]
                                )[index].value
                              }
                            </span>
                          )}
                      </div>
                    ))}
                  {values.properties.length < 3 && (
                    <div className="tw-w-full tw-flex tw-justify-center">
                      <PlusCircleIcon
                        className="tw-h-10 tw-w-10 tw-cursor-pointer"
                        onClick={(event) => addProperty(event, push)}
                      />
                    </div>
                  )}
                </div>
              )}
            </FieldArray>
            <div className="tw-flex tw-items-center tw-justify-center tw-mt-6">
              {status === 'create' ? (
                <Button type="submit">Add Todo</Button>
              ) : (
                <>
                  <Button type="submit">Update Todo</Button>
                  <Button onClick={() => onDeleteTodo(values.id)}>
                    Delete Todo
                  </Button>
                </>
              )}
            </div>
          </Form>
        )
      }}
    </Formik>
  )
}
