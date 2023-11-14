import { Textarea } from '@nextui-org/react'

export const FPTextArea = ({
  color = 'default',
  radius = 'sm',
  label = '',
  placeholder = '',
  size = 'md',
  variant = 'flat',
  fullWidth = false,
  isRequired = false,
  isDisabled = false,
  isReadOnly = false,
  isInvalid = false,
  errorMessage = '',
  value = null,
  setValue = null
}) => {
  return (
    <Textarea
      fullWidth={fullWidth}
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
