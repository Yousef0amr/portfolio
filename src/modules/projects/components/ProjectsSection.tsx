"use client";

import { useState } from "react";
import projectsData from "@/data/projects.json";
import SectionTitle from "@/modules/shared/components/SectionTitle/SectionTitle";
import { useScrollAnimation } from "@/modules/shared";
import styles from "./ProjectsSection.module.css";

const PROJECT_ICONS: Record<string, string> = {
  "E-Commerce Platform": "🛒",
  "Task Management App": "📋",
  "AI Image Generator": "🤖",
  "Real-Time Chat Application": "💬",
  "Portfolio Dashboard": "📊",
  "Weather Forecast App": "🌦",
};

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>();

  const filteredProjects =
    activeFilter === "all"
      ? projectsData.projects
      : projectsData.projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className={`section ${styles.projects}`}>
      <div className="container">
        <SectionTitle
          label="Portfolio"
          title="Featured Projects"
          subtitle="A selection of my recent work — from full-stack apps to creative experiments"
        />

        <div className={styles.filterTabs}>
          {projectsData.categories.map((cat) => (
            <button
              key={cat.id}
              className={`${styles.filterTab} ${activeFilter === cat.id ? styles.active : ""}`}
              onClick={() => setActiveFilter(cat.id)}
            >
              <span className={styles.filterTabText}>{cat.label}</span>
            </button>
          ))}
        </div>

        <div
          ref={ref}
          className={`${styles.projectsGrid} ${isVisible ? "visible" : ""}`}
        >
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`${styles.projectCard} ${project.featured ? styles.featured : ""}`}
            >
              {project.featured && (
                <div className={styles.featuredBadge}>
                  <span className={styles.featuredBadgeDot} />
                  Featured
                </div>
              )}
              <div className={styles.projectImage}>
                <div className={styles.projectImageBg}>
                  <div className={styles.projectImagePattern} />
                  <span className={styles.projectImageIcon}>
                    {PROJECT_ICONS[project.title] || "💻"}
                  </span>
                </div>
                <div className={styles.projectOverlay}>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.overlayLink} ${styles.overlayLinkPrimary}`}
                  >
                    Live Demo ↗
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.overlayLink} ${styles.overlayLinkSecondary}`}
                  >
                    Source Code
                  </a>
                </div>
              </div>

              <div className={styles.projectBody}>
                <span className={styles.projectNumber}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>
                  {project.description}
                </p>
                <div className={styles.projectTags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
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
