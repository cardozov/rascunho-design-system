import { cva, type VariantProps } from "class-variance-authority"
import classNames from "classnames"

const buttonVariants = cva("outline-none rounded-lg font-semibold focus:border-[2px] focus:border-secondary-400", {
  variants: {
    variant: {
      primary: "text-white bg-primary-400 hover:bg-hover active:bg-active disabled:bg-disabled disabled:text-disabled",
      secondary: "text-primary-400 bg-primary-100 hover:bg-hover active:bg-active disabled:bg-disabled disabled:text-disabled",
      tertiary: "text-primary-400 bg-transparent hover:text-hover active:text-active disabled:text-disabled",
    },
    size: {
      xs: "text-xs px-5 py-1",
      sm: "text-sm px-6 py-2",
      md: "text-base px-8 py-3",
      lg: "text-lg px-8 py-3",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
})

export type ButtonProps = VariantProps<typeof buttonVariants> & {
  children: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ children, className, ...rest }: ButtonProps) => {
  return (
    <button
      className={classNames([buttonVariants(rest), className])}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button