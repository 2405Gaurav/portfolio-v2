"use client";
import NextLink from "next/link";
import { cva, type VariantProps } from "cva";
import { cn } from "@/lib/utils";

// --------------------
// CVA v2 syntax
// --------------------
const linkVariants = cva({
  variants: {
    variant: {
      muted: "text-muted-foreground transition-colors hover:text-foreground",
    },
  },
  defaultVariants: {
    variant: "muted",
  },
});

// --------------------
// PROPS
// --------------------
type LinkProps = React.ComponentProps<"a"> &
  VariantProps<typeof linkVariants> & {
    href: string;
  };

// --------------------
// COMPONENT
// --------------------
export const Link = ({
  className,
  variant,
  href,
  children,
  ...rest
}: LinkProps) => {
  const styles = cn(linkVariants({ variant }), className);

  // internal route
  if (href.startsWith("/")) {
    return (
      <NextLink href={href} className={styles} {...rest}>
        {children}
      </NextLink>
    );
  }

  // anchor
  if (href.startsWith("#")) {
    return (
      <a href={href} className={styles} {...rest}>
        {children}
      </a>
    );
  }

  // external
  return (
    <a
      href={href}
      className={styles}
      target="_blank"
      rel="noopener noreferrer"
      {...rest}
    >
      {children}
    </a>
  );
};

export { linkVariants };