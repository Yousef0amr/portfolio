"use client";

import contactData from "@/data/contact.json";
import SectionTitle from "@/modules/shared/components/SectionTitle/SectionTitle";
import { useScrollAnimation } from "@/modules/shared";
import styles from "./ContactSection.module.css";

export default function ContactSection() {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="container">
        <SectionTitle
          label="Contact"
          title="Let's Work Together"
          subtitle="Have a project in mind or just want to say hello? I'd love to hear from you!"
        />

        <div
          ref={ref}
          className={`${styles.contactGrid} animate-on-scroll ${isVisible ? "visible" : ""}`}
        >
          {/* Info */}
          <div className={styles.contactInfo}>
            <p className={styles.contactIntro}>
              I&apos;m always open to discussing{" "}
              <span className={styles.contactIntroHighlight}>new projects</span>
              ,{" "}
              <span className={styles.contactIntroHighlight}>
                creative ideas
              </span>
              , or opportunities to be part of your vision. Feel free to reach
              out through any of the channels below.
            </p>

            <div className={styles.contactMethods}>
              {contactData.contactMethods.map((method) => (
                <a
                  key={method.label}
                  href={method.href}
                  className={styles.contactMethod}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    method.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  <div className={styles.methodIcon}>{method.icon}</div>
                  <div>
                    <div className={styles.methodLabel}>{method.label}</div>
                    <div className={styles.methodValue}>{method.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className={styles.availabilityBadge}>
              <span className={styles.availDot} />
              {contactData.availability}
            </div>
          </div>

          {/* Form */}
          <form
            className={styles.contactForm}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className={styles.formTitle}>
              <span className={styles.formTitleDot} />
              Send a Message
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="contact-name">
                Your Name
              </label>
              <input
                id="contact-name"
                className={styles.formInput}
                type="text"
                placeholder="John Doe"
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="contact-email">
                Your Email
              </label>
              <input
                id="contact-email"
                className={styles.formInput}
                type="email"
                placeholder="john@example.com"
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="contact-message">
                Message
              </label>
              <textarea
                id="contact-message"
                className={styles.formTextarea}
                placeholder="Tell me about your project..."
              />
            </div>
            <button type="submit" className={styles.submitBtn}>
              Send Message ✉️
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
