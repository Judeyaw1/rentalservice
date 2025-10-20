import { useEffect } from "react";

export function useReveal(selector = ".reveal-hidden", rootMargin = "0px 0px -10% 0px") {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(selector));
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("reveal-show");
            observer.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin, threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [selector, rootMargin]);
}



