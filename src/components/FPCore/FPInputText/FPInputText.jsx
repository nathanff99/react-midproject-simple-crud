import { Input } from '@nextui-org/react'

export const FPInputText = ({
  type = 'text',
  color = 'default',
  radius = 'sm',
  label = '',
  placeholder = '',
  size = 'md',
  variant = 'flat',
  isRequired = false,
  isDisabled = false,
  isReadOnly = false,
  isInvalid = false,
  errorMessage = '',
  value = null,
  setValue = null
}) => {
  return (
    <Input
      type={type}
      color={color}
      radius={radius}
      label={label}
      placeholder={placeholder}
      size={size}
      variant={variant}
      isRequired={isRequired}
      isDisabled={isDisabled}
      isReadOnly={isReadOnly}
      isInvalid={isInvalid}
      errorMessage={errorMessage}
      value={value}
      onValueChange={setValue}
    />
  )
}
