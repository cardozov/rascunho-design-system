import { Switch } from '@headlessui/react'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import classNames from 'classnames'
import { useState } from 'react'

export type ThemeSwitchProps = {
  default?: 'dark' | 'light'
  onChange?: (theme: ThemeSwitchProps['default']) => void
}

const ThemeSwitch = ({ default: defaultValue, onChange }: ThemeSwitchProps) => {
  const [dark, setDark] = useState(defaultValue === 'dark')

  const containerClass = classNames(
    'outline-none relative inline-flex h-7 w-16 items-center rounded-full',
    { 'bg-dark-darken': dark },
    { 'bg-darken': !dark }
  )

  const switchClass = classNames(
    'inline-block bg-white h-6 w-6 transform rounded-full transition-transform duration-200 ease-in-out',
    dark ? 'translate-x-[2.1rem]' : 'translate-x-1'
  )

  const iconClass = classNames(
    ' p-1/2 fill-attention-300',
    { 'stroke-attention-100': dark },
    { 'stroke-dark-attention-100': !dark }
  )

  const toggle = () => {
    const newState = !dark
    setDark(newState)
    onChange?.(newState ? 'dark' : 'light')
  }

  return (
    <Switch checked={dark} onChange={toggle} className={containerClass}>
      <span className="sr-only">switch toggle theme</span>
      <span className={switchClass}>
        {dark && <MoonIcon className={iconClass} />}
        {dark || <SunIcon className={iconClass} />}
      </span>
    </Switch>
  )
}

export default ThemeSwitch
