import { cva, type VariantProps } from 'class-variance-authority'
import classNames from 'classnames'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'

const linkVariants = cva(
  'outline-none text-primary-400 focus:border-[2px] focus:border-secondary-400 hover:text-hover hover:underline active:text-active active:underline',
  {
    variants: {
      size: {
        sm: 'text-xs',
        default: 'text-base',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
)

export type LinkProps = VariantProps<typeof linkVariants> & {
  children: React.ReactNode
  disabled?: boolean
} & NextLinkProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement>

const Link = ({ children, className, disabled, href, ...rest }: LinkProps) => {
  const classes = classNames(
    {
      'aria-disabled:text-font-disabled aria-disabled:pointer-events-none':
        disabled,
    },
    linkVariants(rest),
    className
  )

  return (
    <NextLink
      href={href || '#'}
      aria-disabled={disabled}
      className={classes}
      {...rest}
    >
      {children}
    </NextLink>
  )
}

export default Link
