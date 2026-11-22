import { useEffect, useRef, useState } from "react";

// Prefetch just before a section arrives; pause GPU work outside the viewport
// and when the browser tab is hidden, without destroying game state.
export function useSectionVisibility(rootMargin = "300px") {
  const ref = useRef(null);
  const [near, setNear] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);
  const [pageVisible, setPageVisible] = useState(() => !document.hidden);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (!("IntersectionObserver" in window)) {
      setNear(true); setHasEntered(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      setNear(entry.isIntersecting);
      if (entry.isIntersecting) setHasEntered(true);
    }, { rootMargin });
    observer.observe(element);
    return () => observer.disconnect();
  }, [rootMargin]);
  useEffect(() => {
    const update = () => setPageVisible(!document.hidden);
    document.addEventListener("visibilitychange", update);
    return () => document.removeEventListener("visibilitychange", update);
  }, []);
  return { ref, hasEntered, isActive: near && pageVisible };
}
