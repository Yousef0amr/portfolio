import { Logo } from "../../index";
import profileData from "@/data/profile.json";
import styles from "./Footer.module.css";

const SOCIAL_ICONS: Record<string, string> = {
  github: "⌨",
  linkedin: "💼",
  twitter: "🐦",
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContent}`}>
        <Logo size={40} className={styles.footerLogo} />

        <div className={styles.footerSocials}>
          {profileData.socials.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label={social.label}
            >
              {SOCIAL_ICONS[social.platform] || "🔗"}
            </a>
          ))}
        </div>

        <div className={styles.footerLinks}>
          {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map(
            (link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className={styles.footerLink}
              >
                {link}
              </a>
            ),
          )}
        </div>

        <p className={styles.copyright}>
          © {new Date().getFullYear()} {profileData.name}. Built with passion &
          clean code.
        </p>
      </div>
    </footer>
  );
}
