import { cva } from 'class-variance-authority'
import classNames from 'classnames'

import { SwitchProps } from './Switch'

export default ({ variant, enabled, disabled }: SwitchProps) => {
  const containerVariant = cva(
    classNames(
      'outline-none relative inline-flex h-7 w-16 items-center rounded-full disabled:bg-disabled focus:border-2 focus:border-secondary-400',
      { 'pointer-events-none': disabled }
    ),
    {
      variants: {
        variant: {
          common: classNames(
            { 'bg-primary-400': enabled },
            { 'bg-primary-100 hover:bg-primary-200': !enabled }
          ),
          contract: classNames(
            { 'bg-success-100': enabled },
            { 'bg-error-100': !enabled }
          ),
        },
      },
      defaultVariants: {
        variant: 'common',
      },
    }
  )

  const containerClasses = containerVariant({ variant })

  const switchClasses = classNames(
    'inline-block bg-white h-6 w-6 transform rounded-full transition-transform duration-200 ease-in-out',
    enabled ? 'translate-x-[2.1rem]' : 'translate-x-1'
  )

  const iconClasses = classNames(
    'aria-disabled:text-font-disabled',
    { 'text-success-100': enabled },
    { 'text-error-100': !enabled }
  )

  return {
    Icon: iconClasses,
    Switch: switchClasses,
    Container: containerClasses,
  }
}
