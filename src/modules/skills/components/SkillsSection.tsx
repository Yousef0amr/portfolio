"use client";

import skillsData from "@/data/skills.json";
import SectionTitle from "@/modules/shared/components/SectionTitle/SectionTitle";
import { useScrollAnimation } from "@/modules/shared";
import styles from "./SkillsSection.module.css";

export default function SkillsSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="skills" className={`section ${styles.skills}`}>
      <div className="container">
        <SectionTitle
          label="Skills"
          title="My Tech Stack"
          subtitle="Technologies and tools I use to bring ideas to life"
        />

        <div
          ref={ref}
          className={`${styles.skillsGrid} stagger-children ${isVisible ? "visible" : ""}`}
        >
          {skillsData.categories.map((category) => (
            <div key={category.title} className={styles.skillCategory}>
              <div className={styles.categoryHeader}>
                <div className={styles.categoryIcon}>{category.icon}</div>
                <div className={styles.categoryMeta}>
                  <h3 className={styles.categoryTitle}>{category.title}</h3>
                  <span className={styles.categoryCount}>
                    {category.skills.length} skills
                  </span>
                </div>
              </div>

              <div className={styles.skillsList}>
                {category.skills.map((skill) => (
                  <div key={skill.name} className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillLevel}>{skill.level}%</span>
                    </div>
                    <div className={styles.progressBar}>
                      <div
                        className={styles.progressFill}
                        style={{ width: isVisible ? `${skill.level}%` : "0%" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
