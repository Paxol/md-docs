import * as React from "react";
import NextLink from "next/link";
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "~/utils/cn";

const linkVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background underline-offset-4 hover:underline text-primary",
  {
    variants: {
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

export interface LinkProps
  extends React.LinkHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  href: string;
  asNextLink?: boolean;
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, size, asNextLink = false, ...props }, ref) => {
    const Comp = asNextLink ? NextLink : "a";

    return (
      <Comp
        className={cn(linkVariants({ size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Link.displayName = "Link";

export { Link, linkVariants };
