"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps, MouseEvent } from "react";
import { usePageTransition } from "@/components/PageTransition";

type Props = Omit<ComponentProps<typeof Link>, "href"> & { href: string };

/** next/link for internal routes that plays the page-curtain transition. */
export default function TransitionLink({ href, onClick, ...props }: Props) {
  const navigate = usePageTransition();
  const pathname = usePathname();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    // Let the browser handle new-tab / modified clicks
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || props.target === "_blank") return;
    e.preventDefault();
    if (href === pathname) window.scrollTo({ top: 0, behavior: "smooth" });
    else navigate(href);
  };

  return <Link href={href} onClick={handleClick} {...props} />;
}
