import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useHashScroll() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace("#", ""));
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 0);
      }
    }
  }, [hash]);
}
