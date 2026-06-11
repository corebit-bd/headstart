import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils/helpers";

export interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  isActive?: boolean;
}

const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ className, href, isActive, children, ...props }, reference) => {
    return (
      <Link
        href={href}
        ref={reference}
        className={cn(
          "px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md",
          isActive ? "text-black-1000" : "hover:text-brand-purple-1000",
          className,
        )}
        {...props}
      >
        {children}
      </Link>
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
