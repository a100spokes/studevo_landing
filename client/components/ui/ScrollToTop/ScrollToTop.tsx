"use client";
import { useEffect, useState } from "react";
import { useLenis } from "lenis/react";
import styles from "./ScrollTop.module.css";
import { MdKeyboardArrowUp } from "react-icons/md";

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 250);
    };

    toggleVisibility();
    window.addEventListener("scroll", toggleVisibility, { passive: true });

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  function handleClick() {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.5 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <button
      type="button"
      className={`${styles.btn} ${visible ? styles.isVisible : ""}`}
      aria-label="to top"
      onClick={handleClick}
    >
      <MdKeyboardArrowUp className={styles.arrowIcon} aria-hidden="true" />
    </button>
  );
}
