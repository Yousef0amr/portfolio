"use client";

import { useState, useEffect } from "react";
import profileData from "@/data/profile.json";
import styles from "./HeroSection.module.css";

const TECH_TAGS = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Angular",
  "Python",
  "MongoDB",
  "Docker",
];

const TITLES = [
  "Full-Stack Developer",
  "UI/UX Enthusiast",
  "Problem Solver",
  "Open Source Contributor",
];

const getTechIcon = (tech: string) => {
  const icons: Record<string, string> = {
    React: "⚛️",
    "Next.js": "▲",
    TypeScript: "🔷",
    "Node.js": "🟢",
    Angular: "🅰️",
    Python: "🐍",
    MongoDB: "🍃",
    Docker: "🐳",
  };
  return icons[tech] || "🚀";
};

export default function HeroSection() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = TITLES[titleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText === currentTitle) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % TITLES.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(
            isDeleting
              ? currentTitle.substring(0, displayText.length - 1)
              : currentTitle.substring(0, displayText.length + 1),
          );
        },
        isDeleting ? 40 : 80,
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section id="hero" className={styles.hero}>
      {/* Background effects */}
      <div className={styles.shapes}>
        <div className={`${styles.shape} ${styles.shape1}`} />
        <div className={`${styles.shape} ${styles.shape2}`} />
        <div className={`${styles.shape} ${styles.shape3}`} />
        <div className={`${styles.shape} ${styles.shape4}`} />
        <div className={styles.morphBlob} />
        <div className={styles.gridPattern} />
      </div>

      {/* Orbit ring */}
      <div className={styles.orbitRing}>
        <div className={`${styles.orbitDot} ${styles.orbitDot1}`} />
        <div className={`${styles.orbitDot} ${styles.orbitDot2}`} />
        <div className={`${styles.orbitDot} ${styles.orbitDot3}`} />
      </div>

      {/* Particles */}
      <div className={styles.particles}>
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className={styles.particle} />
        ))}
      </div>

      {/* Main Grid Layout */}
      <div className={styles.heroGrid}>
        {/* Left Col: Content */}
        <div className={styles.heroContent}>
          {profileData.availableForWork && (
            <div className={styles.statusBadge}>
              <span className={styles.statusDot} />
              Available for work
            </div>
          )}

          <p className={styles.greeting}>Hello, I&apos;m</p>
          <h1 className={styles.name}>
            <span className="gradient-text">{profileData.name}</span>
          </h1>
          <p className={styles.title}>
            <span className={styles.typewriterWrap}>
              <span className="gradient-text-secondary">{displayText}</span>
              <span className={styles.typewriterCursor} />
            </span>
          </p>
          <p className={styles.tagline}>{profileData.tagline}</p>

          <div className={styles.cta}>
            <a href="#projects" className={styles.ctaPrimary}>
              View My Work ↓
            </a>
            <a href="#contact" className={styles.ctaSecondary}>
              Get In Touch →
            </a>
          </div>

          <div className={styles.techMarqueeWrapper}>
            <div className={styles.techMarqueeContent}>
              {[...TECH_TAGS, ...TECH_TAGS].map((tech, idx) => (
                <span key={`${tech}-${idx}`} className={styles.techItem}>
                  <span className={styles.techIcon}>{getTechIcon(tech)}</span>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Col: Visual 3D Sculpture */}
        <div className={styles.visualArea}>
          <div className={styles.sculptureContainer}>
            <div className={styles.sphere}>
              <div className={styles.ring1} />
              <div className={styles.ring2} />
              <div className={styles.ring3} />
              <div className={styles.core} />
              {/* Floating bits around core */}
              <div className={styles.bit1} />
              <div className={styles.bit2} />
              <div className={styles.bit3} />
            </div>
            {/* Background aura for sculpture */}
            <div className={styles.sculptureAura} />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollMouse}>
          <div className={styles.scrollDot} />
        </div>
        <span>Scroll</span>
      </div>

      {/* Bottom gradient divider */}
      <div className={styles.sectionDivider} />
    </section>
  );
}
