import styled from 'styled-components'
import { FieldProps } from 'formik'

const InputElement = styled.input`
  display: block;
  flex: 1;
  height: 40px;
  font: inherit;
  border: 1px solid #ccc;
  background: #f8f8f8;
  padding: 8px 12px;

  &:focus {
    outline: none;
    background: #ebebeb;
    border-color: #510077;
  }
`

interface InputProps {
  label?: string
  type: string
  placeholder: string
}

export const Input: React.FC<InputProps & FieldProps> = ({
  field,
  type,
  label,
  placeholder,
}) => {
  const { name } = field

  return (
    <div className="tw-m-2 tw-flex tw-items-center tw-h-[60px]">
      <label htmlFor={name} className="tw-min-w-[120px] tw-font-bold">
        {label}
      </label>
      <InputElement
        id={name}
        {...field}
        type={type}
        placeholder={placeholder}
      />
    </div>
  )
}
