import styled from 'styled-components'
import { FieldProps } from 'formik'

const TextareaElement = styled.textarea`
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  background: #f8f8f8;
  padding: 8px;

  &:focus {
    outline: none;
    background: #ebebeb;
    border-color: #510077;
  }
`

interface TextAreaProps {
  label?: string
  placeholder: string
}

export const TextArea: React.FC<TextAreaProps & FieldProps> = ({
  field,
  label,
  placeholder,
}) => {
  const { name } = field

  return (
    <div className="tw-m-2 tw-flex tw-items-start">
      <label htmlFor={name} className="tw-min-w-[120px] tw-font-bold tw-mt-3">
        {label}
      </label>
      <TextareaElement
        rows={5}
        id={name}
        {...field}
        placeholder={placeholder}
      />
    </div>
  )
}
