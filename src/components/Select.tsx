import styled from 'styled-components'

const SelectElement = styled.select`
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

interface SelectProps {
  id: string
  label: string
  defaultValue: number
  options: any
}

export const Select: React.FC<SelectProps> = ({
  id,
  label,
  defaultValue,
  options,
}) => {
  return (
    <div className="tw-m-2 tw-flex tw-items-center tw-h-[60px]">
      <label htmlFor={id} className="tw-min-w-[120px] tw-font-bold">
        {label}
      </label>
      <SelectElement value={defaultValue}>
        {options.map((option: any) => {
          return (
            <option value={option.label} key={option.value}>
              {option.label}
            </option>
          )
        })}
      </SelectElement>
    </div>
  )
}
