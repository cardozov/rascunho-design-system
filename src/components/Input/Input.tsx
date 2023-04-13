import { XCircleIcon } from '@heroicons/react/24/outline'
import { cva } from 'class-variance-authority'
import classNames from 'classnames'

export type InputProps = {
  state?: 'default' | 'error' | 'success'
  description?: string
} & React.InputHTMLAttributes<HTMLInputElement>

const Input = ({
  className,
  disabled,
  readOnly,
  description,
  state = 'default',
  ...rest
}: InputProps) => {
  const inputVariants = cva(
    'outline-none rounded-md text-sm border-2 p-4 placeholder:text-sm',
    {
      variants: {
        state: {
          default:
            'bg-darken text-font-200 hover:border-primary-400 focus:border-secondary-400',
          error: 'border-error-100 bg-error-300 text-font-200',
          success: 'border-transparent bg-success-300 text-font-200',
        },
      },
      defaultVariants: {
        state: 'default',
      },
    }
  )

  const descriptionVariants = cva(
    'text-sm mt-1/2 font-extralight disabled:text-font-disabled',
    {
      variants: {
        state: {
          default: 'text-font-200',
          error: 'text-error-100',
          success: 'text-font-300',
        },
      },
    }
  )

  const classes = classNames([
    inputVariants({ state }),
    {
      'disabled:border-font-disabled disabled:bg-disabled disabled:text-font-disabled':
        disabled,
    },
    className,
  ])

  return (
    <div>
      <input
        className={classes}
        disabled={disabled}
        readOnly={readOnly || disabled}
        {...rest}
      />
      {description && (
        <div className="flex h-full items-center gap-1">
          {state === 'error' && (
            <XCircleIcon className="h-4 w-4 font-bold text-error-100" />
          )}
          <span className={descriptionVariants({ state })}>{description}</span>
        </div>
      )}
    </div>
  )
}

export default Input
