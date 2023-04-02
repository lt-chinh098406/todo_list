import styled from 'styled-components'

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
  id: string
  label?: string
  type: string
  placeholder: string
  value?: string
  changeHandler?: () => void
  touchHandler?: () => void
}

export const Input: React.FC<InputProps> = ({
  id,
  label,
  type,
  placeholder,
  value,
  changeHandler,
  touchHandler,
}) => {
  return (
    <div className="tw-m-2 tw-flex tw-items-center tw-h-[60px]">
      <label htmlFor={id} className="tw-min-w-[120px] tw-font-bold">
        {label}
      </label>
      <InputElement
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={changeHandler}
        value={value}
        onBlur={touchHandler}
      />
    </div>
  )
}
