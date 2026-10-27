"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";

// idle → covering (curtain slides up over the page) → covered (route changes
// underneath) → revealing (curtain keeps going up and off the screen) → idle
type Phase = "idle" | "covering" | "covered" | "revealing";

const DURATION = 600; // ms — keep in sync with the transition below
const EASE = "cubic-bezier(0.76, 0, 0.24, 1)";
// If the new page takes too long, lift the curtain anyway
const MAX_COVERED = 4000;

const transforms: Record<Phase, string> = {
  idle: "translateY(105%) skewY(-5deg)",
  covering: "translateY(0) skewY(-5deg)",
  covered: "translateY(0) skewY(-5deg)",
  revealing: "translateY(-105%) skewY(-5deg)",
};

const TransitionContext = createContext<(href: string) => void>(() => {});

/** Navigate to an internal route with the curtain transition. */
export const usePageTransition = () => useContext(TransitionContext);

export function PageTransitionProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [phase, setPhase] = useState<Phase>("idle");
  const target = useRef<string | null>(null);
  const from = useRef<string | null>(null);

  const navigate = useCallback(
    (href: string) => {
      if (phase !== "idle") return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        router.push(href);
        return;
      }
      target.current = href;
      from.current = pathname;
      setPhase("covering");
    },
    [phase, pathname, router]
  );

  // Fully covered → switch the route underneath
  useEffect(() => {
    if (phase !== "covering") return;
    const t = setTimeout(() => {
      setPhase("covered");
      if (target.current) router.push(target.current);
    }, DURATION);
    return () => clearTimeout(t);
  }, [phase, router]);

  // New route committed (or timed out) → start from the top and lift the curtain
  useEffect(() => {
    if (phase !== "covered") return;
    const reveal = () => {
      window.scrollTo({ top: 0, behavior: "instant" });
      setPhase("revealing");
    };
    if (pathname !== from.current) {
      // let the new page paint once before revealing it
      const raf = requestAnimationFrame(() => requestAnimationFrame(reveal));
      return () => cancelAnimationFrame(raf);
    }
    const t = setTimeout(reveal, MAX_COVERED);
    return () => clearTimeout(t);
  }, [phase, pathname]);

  useEffect(() => {
    if (phase !== "revealing") return;
    const t = setTimeout(() => setPhase("idle"), DURATION);
    return () => clearTimeout(t);
  }, [phase]);

  return (
    <TransitionContext.Provider value={navigate}>
      {children}
      <div
        aria-hidden
        className="page-curtain fixed inset-x-0 -top-[20vh] z-[100] flex h-[140vh] items-center justify-center"
        style={{
          transform: transforms[phase],
          transition: phase === "covering" || phase === "revealing" ? `transform ${DURATION}ms ${EASE}` : "none",
          visibility: phase === "idle" ? "hidden" : "visible",
          pointerEvents: phase === "idle" ? "none" : "auto",
        }}
      >
        {/* counter-skewed so the logo stays upright */}
        <span
          className="clay-icon h-16 w-16 !rounded-3xl bg-surface font-heading text-2xl font-extrabold text-accent-ink dark:text-accent"
          style={{ transform: "skewY(5deg)" }}
        >
          SN
        </span>
      </div>
    </TransitionContext.Provider>
  );
}
