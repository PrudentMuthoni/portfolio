"use client";

import styles from "@/styles/Projects.module.css";

interface Project {
  title: string;
  category: string;
  description: string;
  features: string[];
  tech: string[];
  githubUrl: string | null;
  liveUrl: string | null;
}

const projects: Project[] = [
  {
    title: "Skin Lesion Classification Portal",
    category: "Data & ML",
    description:
      "A machine learning application that analyses skin lesion images and classifies them as benign or malignant.",
    features: [
      "Image-based skin lesion classification",
      "Machine learning predictions for uploaded images",
      "Classification results to support preliminary assessment",
    ],
    tech: ["Python", "TensorFlow", "Scikit-learn"],
    githubUrl: "https://github.com/PrudentMuthoni/computer-vision.git",
    liveUrl: null,
  },
  {
    title: "Pamodzi",
    category: "Agritech & Software Engineering",
    description:
      "An agricultural aggregation platform connecting smallholder farmers in Zambia with buyers through coordinated demand campaigns and cooperative collection hubs.",
    features: [
      "Matches buyer demand campaigns with aggregated farmer produce listings",
      "USSD-based supply submission for farmers without smartphones",
      "Coordinates produce collection through cooperative hubs",
    ],
    tech: ["Python", "FastAPI", "PostgreSQL", "USSD", "Flutterwave"],
    githubUrl: null,
    liveUrl: "https://phoenixdashboard.vercel.app/",
  },
  {
    title: "Vesper",
    category: "AI & Environmental Monitoring",
    description:
      "A maritime monitoring platform designed to identify potential illegal fishing activity on Lake Kariba using satellite data and support coordinated patrol responses.",
    features: [
      "Uses NASA satellite data to identify unusual fishing activity",
      "Generates alerts for potentially suspicious fishing zones",
      "Enables patrol coordinators to assign officers for field verification",
    ],
    tech: ["Satellite Data", "Geospatial Analysis", "Data Visualization"],
    githubUrl: null,
    liveUrl: "https://insyte-informational-website.vercel.app/",
  },
  {
    title: "Taleora",
    category: "AI & Media",
    description:
      "An AI-powered video generation studio that allows users to create videos from written prompts or existing images.",
    features: [
      "Generates videos from text descriptions",
      "Transforms uploaded images into video content",
      "Integrates AI video generation capabilities into a unified workflow",
    ],
    tech: ["AI", "Fal.ai", "Text-to-Video", "Image-to-Video"],
    githubUrl: "https://github.com/PrudentMuthoni/Taleora-Frontend.git",
    liveUrl: null,
  },
  {
    title: "Retrieval-Augmented Generation (RAG) System",
    category: "AI & Backend Development",
    description:
      "A document-based question-answering system that combines information retrieval with large language models to generate contextual responses grounded in uploaded documents.",
    features: [
      "Processes uploaded documents for information retrieval",
      "Enables contextual search across document content",
      "Generates answers grounded in retrieved document information",
    ],
    tech: ["Python", "RAG", "LLMs", "Vector Search"],
    githubUrl: "https://github.com/PrudentMuthoni/LLM-hallucination-RAG.git",
    liveUrl: null,
  },
  {
    title: "House Prices Predictive Modeling Pipeline",
    category: "Data Science & Machine Learning",
    description:
      "A machine learning pipeline that predicts residential property values using Ridge regression, with structured preprocessing, leakage-free data handling and model evaluation.",
    features: [
      "Implements Scikit-learn Pipelines and ColumnTransformer for structured preprocessing",
      "Prevents data leakage through training-only imputation and transformation",
      "Visualizes prediction residuals and ranks the top 15 property price influencing features",
    ],
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
    githubUrl: "https://github.com/PrudentMuthoni/Data-Training.git",
    liveUrl: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          A selection of projects across web, data, AI, and software engineering
        </p>
        <div className="section-divider" />

        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <div key={project.title} className={styles.projectCard}>
              <div className={styles.projectTop}>
                <span className={styles.projectCategory}>
                  {project.category}
                </span>

                <div className={styles.projectLinks}>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                      aria-label="GitHub repository"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                      aria-label="Visit project website"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              <h3 className={styles.projectTitle}>{project.title}</h3>

              <p className={styles.projectDescription}>{project.description}</p>

              <ul className={styles.featureList}>
                {project.features.map((feature) => (
                  <li key={feature} className={styles.feature}>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className={styles.techTags}>
                {project.tech.map((tech) => (
                  <span key={tech} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
