import styled from 'styled-components'

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
  id: string
  label: string
  placeholder: string
  rows?: number
  value?: string
  changeHandler?: () => void
  touchHandler?: () => void
}

export const TextArea: React.FC<TextAreaProps> = ({
  id,
  label,
  placeholder,
  rows,
  value,
  changeHandler,
  touchHandler,
}) => {
  return (
    <div className="tw-m-2 tw-flex tw-items-start">
      <label htmlFor={id} className="tw-min-w-[120px] tw-font-bold tw-mt-3">
        {label}
      </label>
      <TextareaElement
        id={id}
        rows={rows || 5}
        placeholder={placeholder}
        onChange={changeHandler}
        value={value}
        onBlur={touchHandler}
      />
    </div>
  )
}
