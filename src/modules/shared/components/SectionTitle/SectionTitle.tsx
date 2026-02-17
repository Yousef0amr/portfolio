import styles from "./SectionTitle.module.css";

interface SectionTitleProps {
  label: string;
  title: string;
  subtitle?: string;
  gradient?: boolean;
}

export default function SectionTitle({
  label,
  title,
  subtitle,
  gradient = true,
}: SectionTitleProps) {
  return (
    <div className={styles.sectionTitle}>
      <span className={styles.label}>{label}</span>
      <h2 className={`${styles.heading} ${gradient ? "gradient-text" : ""}`}>
        {title}
      </h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      <div className={styles.accentLine} />
    </div>
  );
}
