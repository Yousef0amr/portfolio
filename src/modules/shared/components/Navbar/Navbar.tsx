"use client";

import { useState, useEffect } from "react";
import { useTheme, THEMES, type Theme, Logo } from "../../index";
import styles from "./Navbar.module.css";

const NAV_ITEMS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const THEME_LABELS: Record<Theme, string> = {
  dark: "Dark",
  light: "Light",
  ocean: "Ocean",
  sunset: "Sunset",
};

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = NAV_ITEMS.map((item) => item.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.navContent}>
        <a
          className={styles.logo}
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#hero");
          }}
        >
          <Logo size={32} />
        </a>

        <ul className={`${styles.navLinks} ${mobileOpen ? styles.open : ""}`}>
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                className={`${styles.navLink} ${activeSection === item.href.replace("#", "") ? styles.active : ""}`}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.navRight}>
          <div className={styles.themeSwitcher}>
            {THEMES.map((t) => (
              <button
                key={t}
                className={`${styles.themeBtn} ${theme === t ? styles.active : ""}`}
                onClick={() => setTheme(t)}
                title={THEME_LABELS[t]}
                aria-label={`Switch to ${THEME_LABELS[t]} theme`}
              >
                <span
                  className={`${styles.themeDot} ${styles[`themeDot${t.charAt(0).toUpperCase() + t.slice(1)}`]}`}
                />
              </button>
            ))}
          </div>

          <button
            className={`${styles.hamburger} ${mobileOpen ? styles.open : ""}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
          </button>
        </div>
      </div>
    </nav>
  );
}
