import NextLink from "next/link";
import styles from "./Link.module.css";

type Variant = "primary" | "secondary" | "ghost" | "outline" | "arrow";
type ButtonSize = "sm" | "md" | "lg";
// ! When the need arises to create our button component this prop will be reusable.
type BaseProps = {
  variant: Variant;
  size?: ButtonSize;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
};

const variantStyles: Record<Variant, string> = {
  primary: styles.primary,
  secondary: styles.secondary,
  ghost: styles.ghost,
  outline: styles.outline,
  arrow: styles.arrow,
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: styles.sm,
  md: styles.md,
  lg: styles.lg,
};

interface Props extends BaseProps {
  href: string;
  children: React.ReactNode;
}

export const Link = ({ href, children, size = "md", variant, disabled, className }: Props) => {
  return (
    <NextLink
      href={href}
      className={`${className ?? ""} ${styles.base} ${variantStyles[variant]} ${sizeStyles[size]}`}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : undefined}
    >
      {children}
    </NextLink>
  );
};
