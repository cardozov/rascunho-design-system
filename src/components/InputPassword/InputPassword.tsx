import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'
import classNames from 'classnames'
import { useState } from 'react'

import Input from '../Input/Input'

export type InputPasswordProps = {
  state?: 'default' | 'error' | 'success'
  description?: string
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>

const InputPassword = ({ className, ...rest }: InputPasswordProps) => {
  const [showPassword, setShowPassword] = useState(false)
  const toggleShowPassword = () => setShowPassword(!showPassword)
  const InputIcon = showPassword ? EyeSlashIcon : EyeIcon

  return (
    <div className="relative">
      <Input
        type={showPassword ? 'text' : 'password'}
        className={classNames('form-input w-full', className)}
        onChange={console.log}
        {...rest}
      />
      <InputIcon
        className="absolute right-4 top-5 h-4 w-4 cursor-pointer fill-font-300"
        onClick={toggleShowPassword}
      />
    </div>
  )
}

export default InputPassword
