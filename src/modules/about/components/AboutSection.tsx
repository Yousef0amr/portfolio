"use client";

import profileData from "@/data/profile.json";
import SectionTitle from "@/modules/shared/components/SectionTitle/SectionTitle";
import { useScrollAnimation } from "@/modules/shared";
import styles from "./AboutSection.module.css";

export default function AboutSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <SectionTitle
          label="About Me"
          title="Who I Am"
          subtitle="Get to know me better — my journey, skills, and what drives me"
        />

        <div
          ref={ref}
          className={`${styles.aboutGrid} animate-on-scroll ${isVisible ? "visible" : ""}`}
        >
          {/* Left: Bio + Stats */}
          <div className={styles.aboutLeft}>
            <p className={styles.aboutText}>{profileData.bio}</p>
            <p className={styles.aboutText}>
              I believe in writing{" "}
              <span className={styles.aboutHighlight}>
                clean, maintainable code
              </span>{" "}
              and creating{" "}
              <span className={styles.aboutHighlight}>
                intuitive user experiences
              </span>
              . When I&apos;m not coding, you can find me exploring new
              technologies and contributing to open-source projects.
            </p>

            <div className={styles.statsGrid}>
              {profileData.stats.map((stat) => (
                <div key={stat.label} className={styles.statCard}>
                  <span className={`${styles.statValue} gradient-text`}>
                    {stat.value}
                  </span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Info Card */}
          <div className={styles.infoCard}>
            <div className={styles.infoCardTitle}>
              <span className={styles.infoCardTitleDot} />
              Quick Info
            </div>
            <div className={styles.infoItems}>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>📍</div>
                <div>
                  <div className={styles.infoLabel}>Location</div>
                  <div className={styles.infoValue}>{profileData.location}</div>
                </div>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>📧</div>
                <div>
                  <div className={styles.infoLabel}>Email</div>
                  <div className={styles.infoValue}>{profileData.email}</div>
                </div>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>🎯</div>
                <div>
                  <div className={styles.infoLabel}>Specialization</div>
                  <div className={styles.infoValue}>{profileData.title}</div>
                </div>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>🟢</div>
                <div>
                  <div className={styles.infoLabel}>Status</div>
                  <div className={styles.infoValue}>
                    {profileData.availableForWork
                      ? "Open to opportunities"
                      : "Not available"}
                  </div>
                </div>
              </div>
            </div>
            <a href={profileData.resumeUrl} className={styles.downloadBtn}>
              📄 Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
