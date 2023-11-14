import { Button } from '@nextui-org/react'

export const FPButton = ({
  className = '',
  text = '',
  color = 'primary',
  variant = 'solid',
  size = 'md',
  radius = 'sm',
  fullWidth = false,
  isIconOnly = false,
  isLoading = false,
  isDisabled = false,
  onClick = null
}) => {
  return (
    <Button
      className={className}
      fullWidth={fullWidth}
      isIconOnly={isIconOnly}
      color={color}
      variant={variant}
      size={size}
      radius={radius}
      isLoading={isLoading}
      isDisabled={isDisabled}
      onClick={onClick}
    >
      {text}
    </Button>
  )
}
