import { useEffect } from "react";

export default function ScrollToTop() {

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log("scrollToTopFired")
  }, []);

  return null;
}