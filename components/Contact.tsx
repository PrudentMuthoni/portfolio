"use client";

import { useState, FormEvent } from "react";
import styles from "@/styles/Contact.module.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const dataToSend = {
      ...formData,
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
    };
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }

    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Have a project in mind or just want to connect? Let&apos;s talk.
        </p>
        <div className="section-divider" />

        <div className={styles.contactGrid}>
          <div className={styles.contactInfo}>
            <h3 className={styles.infoTitle}>
              Let&apos;s build something together
            </h3>
            <p className={styles.infoText}>
              I&apos;m always open to discussing new projects, creative ideas,
              or opportunities to be part of your vision. Whether you need a web
              application, a data solution, a machine learning model, or a
              security assessment — I&apos;d love to hear from you.
            </p>

            <div className={styles.contactDetails}>
              <a
                href="mailto:muthonimprudent@gmail.com"
                className={styles.contactDetailItem}
              >
                <div className={styles.contactDetailIcon}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <span className={styles.contactDetailLabel}>Email</span>
                  <span className={styles.contactDetailValue}>
                    muthonimprudent@gmail.com
                  </span>
                </div>
              </a>

              <div className={styles.contactDetailItem}>
                <div className={styles.contactDetailIcon}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <span className={styles.contactDetailLabel}>Location</span>
                  <span className={styles.contactDetailValue}>
                    Nairobi, Kenya
                  </span>
                </div>
              </div>

              <div className={styles.contactDetailItem}>
                <div className={styles.contactDetailIcon}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <span className={styles.contactDetailLabel}>
                    Availability
                  </span>
                  <span className={styles.contactDetailValue}>
                    Open to new opportunities
                  </span>
                </div>
              </div>
            </div>
          </div>

          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={styles.input}
                placeholder="Your name"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={styles.textarea}
                placeholder="Tell me about your project..."
                rows={5}
                required
              />
            </div>

            <button
              type="submit"
              className={styles.submitButton}
              disabled={status === "sending"}
            >
              {status === "sending"
                ? "Sending..."
                : status === "sent"
                  ? "Message Sent!"
                  : "Send Message"}
            </button>

            {status === "sent" && (
              <p className={styles.successMessage}>
                Thanks for reaching out! I&apos;ll get back to you soon.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
