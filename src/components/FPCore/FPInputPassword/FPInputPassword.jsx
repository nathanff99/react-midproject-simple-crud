import { useState } from 'react'

import { Input } from '@nextui-org/react'
import { EyeFilledIcon } from '@icons/EyeFilledIcon'
import { EyeSlashFilledIcon } from '@icons/EyeSlashFilledIcon'

import './FPInputPassword.scss'

export const FPInputPassword = ({
  label = '',
  placeholder = '',
  size = 'md',
  isRequired = false,
  isInvalid = false,
  errorMessage = '',
  value = null,
  setValue = null
}) => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => setIsVisible(!isVisible)

  return (
    <Input
      className="input-password"
      type={isVisible ? 'text' : 'password'}
      endContent={
        <button
          className="input-password__end-content"
          type="button"
          onClick={toggleVisibility}
        >
          {isVisible ? (
            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      }
      label={label}
      placeholder={placeholder}
      size={size}
      isRequired={isRequired}
      isInvalid={isInvalid}
      errorMessage={errorMessage}
      value={value}
      onValueChange={setValue}
    />
  )
}
