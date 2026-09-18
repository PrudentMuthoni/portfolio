'use client';

import styles from '@/styles/About.module.css';

export default function About() {
  const highlights = [
    {
      title: 'Web Development',
      desc: 'Building responsive, performant web apps with React, Next.js, and modern JavaScript.',
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
    },
    {
      title: 'Data & ML',
      desc: 'Designing data pipelines and deploying machine learning models that drive insights.',
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      ),
    },
    {
      title: 'Cybersecurity',
      desc: 'Securing applications through vulnerability analysis, secure coding, and penetration testing.',
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="section-divider" />

        <div className={styles.aboutGrid}>
          <div className={styles.aboutText}>
            <p>
              I&apos;m a software engineer with a passion for building
              end-to-end solutions that combine clean code, intelligent systems,
              and robust security. With expertise spanning full-stack web
              development, data science, machine learning, and cybersecurity, I
              bring a multidisciplinary approach to every project.
            </p>
            <p>
              My journey started with Python and data analysis, grew into
              building production web apps with React and Next.js, and expanded
              into deploying ML models and hardening applications against
              real-world threats. I thrive at the intersection of these
              domains — where great user experiences meet data-driven
              intelligence and security by design.
            </p>
            <p>
              When I&apos;m not coding, you&apos;ll find me contributing to open
              source, writing about tech, or exploring the latest in AI and
              security research.
            </p>
          </div>

          <div className={styles.highlightsColumn}>
            {highlights.map((item) => (
              <div key={item.title} className={styles.highlightCard}>
                <div className={styles.highlightIcon}>{item.icon}</div>
                <div>
                  <h3 className={styles.highlightTitle}>{item.title}</h3>
                  <p className={styles.highlightDesc}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
