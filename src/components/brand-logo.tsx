import { Link } from "@tanstack/react-router";

interface BrandLogoProps {
  collapsed?: boolean;
  href?: string;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "nav" | "login";
}

export function BrandLogo({
  collapsed = false,
  href = "/",
  className = "",
  size = "md",
}: BrandLogoProps) {
  const imgHeights = {
    sm: "h-8 sm:h-9",
    md: "h-8 sm:h-9 md:h-10",
    lg: "h-10 sm:h-11 md:h-12",
    xl: "h-10 sm:h-12 md:h-14",
    nav: "h-14 sm:h-[58px] md:h-[62px]",
    login: "h-12 sm:h-13 md:h-14",
  };

  return (
    <Link
      to={href}
      className={`inline-flex items-center group transition-all shrink-0 ${className}`}
    >
      {collapsed ? (
        <div className="relative h-10 w-10 shrink-0 overflow-hidden grid place-items-center">
          <img
            src="/igvp-logo.png"
            alt="IGVP Logo"
            className="h-full w-full object-cover object-left scale-[1.3] dark:hidden"
          />
          <img
            src="/igvp-logo-dark.png"
            alt="IGVP Logo"
            className="h-full w-full object-cover object-left scale-[1.3] hidden dark:block"
          />
        </div>
      ) : (
        <div className="relative flex items-center shrink-0 py-0.5">
          {/* Light Mode Logo */}
          <img
            src="/igvp-logo.png"
            alt="IGVP Institute"
            className={`${imgHeights[size]} w-auto object-contain transition-transform duration-200 group-hover:scale-[1.03] dark:hidden`}
          />
          {/* Dark Mode Logo */}
          <img
            src="/igvp-logo-dark.png"
            alt="IGVP Institute"
            className={`${imgHeights[size]} w-auto object-contain transition-transform duration-200 group-hover:scale-[1.03] hidden dark:block`}
          />
        </div>
      )}
    </Link>
  );
}



