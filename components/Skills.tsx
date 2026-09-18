'use client';

import styles from '@/styles/Skills.module.css';

interface SkillCategory {
  title: string;
  icon: string;
  skills: { name: string; level: number }[];
}

const categories: SkillCategory[] = [
  {
    title: 'Languages',
    icon: 'code',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'JavaScript', level: 92 },
      { name: 'TypeScript', level: 88 },
      { name: 'SQL', level: 85 },
    ],
  },
  {
    title: 'Frontend',
    icon: 'layout',
    skills: [
      { name: 'React', level: 93 },
      { name: 'Next.js', level: 90 },
      { name: 'HTML/CSS', level: 90 },
      { name: 'Redux', level: 82 },
    ],
  },
  {
    title: 'Data & ML',
    icon: 'data',
    skills: [
      { name: 'Pandas / NumPy', level: 92 },
      { name: 'Scikit-Learn', level: 88 },
      { name: 'TensorFlow / PyTorch', level: 80 },
      { name: 'Data Visualization', level: 85 },
    ],
  },
  {
    title: 'Cybersecurity',
    icon: 'shield',
    skills: [
      { name: 'Penetration Testing', level: 82 },
      { name: 'OWASP Top 10', level: 88 },
      { name: 'Network Security', level: 80 },
      { name: 'Secure Coding', level: 90 },
    ],
  },
  {
    title: 'Tools & DevOps',
    icon: 'tools',
    skills: [
      { name: 'Git', level: 92 },
      { name: 'Docker', level: 85 },
      { name: 'CI/CD', level: 80 },
      { name: 'Linux', level: 88 },
    ],
  },
  {
    title: 'Databases',
    icon: 'database',
    skills: [
      { name: 'PostgreSQL', level: 88 },
      { name: 'MongoDB', level: 80 },
      { name: 'Redis', level: 75 },
      { name: 'Supabase', level: 85 },
    ],
  },
];

function CategoryIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactElement> = {
    code: (
      <>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </>
    ),
    layout: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </>
    ),
    data: (
      <>
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </>
    ),
    shield: (
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    ),
    tools: (
      <>
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </>
    ),
    database: (
      <>
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </>
    ),
  };

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {icons[name]}
    </svg>
  );
}

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className="container">
        <h2 className="section-title">Skills &amp; Expertise</h2>
        <p className="section-subtitle">
          Technologies and tools I work with across multiple domains
        </p>
        <div className="section-divider" />

        <div className={styles.skillsGrid}>
          {categories.map((category) => (
            <div key={category.title} className={styles.skillCard}>
              <div className={styles.skillHeader}>
                <div className={styles.skillIcon}>
                  <CategoryIcon name={category.icon} />
                </div>
                <h3 className={styles.skillCategory}>{category.title}</h3>
              </div>
              <div className={styles.skillList}>
                {category.skills.map((skill) => (
                  <div key={skill.name} className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillPercent}>{skill.level}%</span>
                    </div>
                    <div className={styles.skillBar}>
                      <div
                        className={styles.skillBarFill}
                        style={{ width: `${skill.level}%` }}
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
