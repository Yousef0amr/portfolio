"use client";

import experienceData from "@/data/experience.json";
import SectionTitle from "@/modules/shared/components/SectionTitle/SectionTitle";
import { useScrollAnimation } from "@/modules/shared";
import styles from "./ExperienceSection.module.css";

export default function ExperienceSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="experience" className={`section ${styles.experience}`}>
      <div className="container">
        <SectionTitle
          label="Journey"
          title="Experience & Education"
          subtitle="My professional journey and academic background"
        />

        <div
          ref={ref}
          className={`${styles.timeline} stagger-children ${isVisible ? "visible" : ""}`}
        >
          {experienceData.experience.map((item) => (
            <div key={item.id} className={styles.timelineItem}>
              <div className={styles.timelineDot} />
              <div className={styles.timelineCard}>
                <span
                  className={`${styles.timelineType} ${
                    item.type === "work"
                      ? styles.typeWork
                      : styles.typeEducation
                  }`}
                >
                  {item.type === "work" ? "💼 Work" : "🎓 Education"}
                </span>
                <div className={styles.timelineHeader}>
                  <h3 className={styles.timelineTitle}>{item.title}</h3>
                  <span className={styles.timelinePeriod}>{item.period}</span>
                </div>
                <p className={styles.timelineOrg}>
                  <span className={styles.orgDot} />
                  {item.organization}
                </p>
                <p className={styles.timelineDescription}>{item.description}</p>
                <div className={styles.highlights}>
                  {item.highlights.map((h) => (
                    <span key={h} className={styles.highlight}>
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
