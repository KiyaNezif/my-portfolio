import React, { JSX, useState } from "react";
// @ts-ignore
import "../App.css";

type ExperienceItem = {
  title: string;
  date: string;
  description: string[];
  icon?: JSX.Element;
};

const experiences: ExperienceItem[] = [
  {
    title: "Web Designer & WordPress Developer",
    date: "2024 – Present",
    description: [
      "Designing and developing responsive WordPress websites for clients.",
      "Focusing on user experience, accessibility, and modern UI design.",
    ],
  },
  {
    title: "Freelance Web Designer & Developer (Own Business)",
    date: "Dec 2025 – Present",
    description: [
      "Building custom websites for small businesses using WordPress, React, HTML, CSS, and modern frontend tools.",
      "Creating user-friendly interfaces with focus on performance and clean design.",
      "Working directly with clients to understand requirements and deliver tailored digital solutions.",
    ],
  },
  {
    title: "Block Code Trainer – YoungCoderz (Part-Time)",
    date: "Aug 2024 – Present",
    description: [
      "Teaching children (8–16 years) programming through block coding and interactive learning.",
      "Developing engaging lessons focused on creativity, logic, and problem-solving.",
      "Strengthening communication and teaching skills in a technical education environment.",
    ],
  },
  {
    title: "Web Designer & Developer – Rådet for Kulturkompetanse",
    date: "Sep 2024 – Present",
    description: [
      "Improving website structure, usability, and overall user experience.",
      "Ensuring accessibility and clear information flow across the platform.",
    ],
  },
  {
    title: "Frontend Developer Intern – Knitry",
    date: "Jan 2022 – Sep 2022",
    description: [
      "Developed mobile user interfaces using Flutter.",
      "Collaborated with designers and developers in an agile environment.",
      "Contributed to improving usability and interface consistency.",
    ],
  },
  {
    title: "Retail Experience – Yohana",
    date: "Jun 2023 – Jun 2024",
    description: [
      "Provided customer service and sales support in a fast-paced environment.",
      "Developed teamwork, communication, and problem-solving skills.",
    ],
  },
];

const Experience: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedExperiences = showAll
    ? experiences
    : experiences.slice(0, 2);

  return (
    <><section id="experience"></section><section className="experience-section">
      <h2 className="section-title">Experience</h2>

      {displayedExperiences.map((exp, idx) => (
        <div key={idx} className="experience-card">
          <div className="experience-content">
            <h3 className="experience-title">{exp.title}</h3>
            <p className="experience-date">{exp.date}</p>

            <ul className="experience-description">
              {exp.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}

      <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
        <button
          className="show-more-btn"
          onClick={() => setShowAll((prev) => !prev)}
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    </section></>
  );
};

export default Experience;