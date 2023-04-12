import { cva, type VariantProps } from "class-variance-authority"
import classNames from "classnames"
import NextLink, { LinkProps as NextLinkProps } from "next/link"

const linkVariants = cva(
  "outline-none text-primary-400 focus:border-[2px] focus:border-secondary-400 hover:text-hover hover:underline active:text-active active:underline disabled:text-disabled",
  {
    variants: {
      size: {
        sm: "text-xs",
        default: "text-base",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

export type LinkProps = VariantProps<typeof linkVariants> & {
  children: React.ReactNode
  disabled?: boolean
} & NextLinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>

const Link = ({ children, className, href, ...rest }: LinkProps) => {
  return (
    <NextLink
      href={href || "#"} 
      className={classNames([linkVariants(rest), className])}
      {...rest}
    >
      {children}
    </NextLink>
  )
}

export default Link