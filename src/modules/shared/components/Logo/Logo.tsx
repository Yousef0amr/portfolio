"use client";

import React from "react";
import styles from "./Logo.module.css";

interface LogoProps {
  className?: string;
  size?: number;
}

export default function Logo({ className = "", size = 40 }: LogoProps) {
  return (
    <div
      className={`${styles.logoContainer} ${className}`}
      style={{ "--size": `${size}px` } as React.CSSProperties}
    >
      <div className={styles.logoVisual}>
        <div className={styles.ring} />
        <div className={styles.triangle} />
        <div className={styles.letter}>Y</div>
      </div>
      <div className={styles.logoLabel}>
        <span className={styles.firstName}>Yousef</span>
        <span className={styles.lastName}>Amr</span>
      </div>
    </div>
  );
}
