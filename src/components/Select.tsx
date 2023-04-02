import TodoColumnModel from '@/models/TodoColumn'
import { FieldProps } from 'formik'
import Select from 'react-select'
interface SelectProps {
  label: string
  options: TodoColumnModel[]
}

export const SelectField: React.FC<SelectProps & FieldProps> = ({
  field,
  options,
  label,
}) => {
  const { name, value } = field
  const selectedOption: TodoColumnModel = options.find(
    (option) => option.value === value
  ) || {
    value: 1,
    label: 'New',
  }

  const handleSelectedOptionChange = (
    selectedOption: TodoColumnModel | null
  ): void => {
    const selectedValue = selectedOption ? selectedOption.value : selectedOption

    const changeEvent = {
      target: {
        name: name,
        value: selectedValue,
      },
    }
    field.onChange(changeEvent)
  }

  return (
    <div className="tw-m-2 tw-flex tw-items-center tw-h-[60px]">
      <label htmlFor={name} className="tw-min-w-[120px] tw-font-bold">
        {label}
      </label>
      <Select
        className="tw-w-full"
        id={name}
        {...field}
        value={selectedOption}
        onChange={handleSelectedOptionChange}
        options={options}
      />
    </div>
  )
}
