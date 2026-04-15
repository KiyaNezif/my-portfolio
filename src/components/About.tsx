import React from "react";
import "../App.css";

const skills = [
  "UX/UI Design",
  "Web Development",
  "React & TypeScript",
  "Creative Problem Solving",
  "Graphic Design",
  "WordPress",
];

const education = [
  {
    year: "2023 - 2025",
    title: "Master’s in Programming and System Architecture",
    school: "University of Oslo / OsloMet",
  },
  {
    year: "2020 - 2023",
    title: "Bachelor in Applied Computer Technology",
    school: "OsloMet University",
  },
];

const AboutMe: React.FC = () => {
  return (
    
    <section
      style={{
        padding: "4rem 1rem",
        maxWidth: 1100,
        margin: "0 auto",
        fontFamily: "sans-serif",
      }}
    >
      <section id="about">  </section>
      {/* TITLE */}
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h2 style={{ fontSize: 38, fontWeight: 700, color: "#1a1a2e" }}>
          About Me
        </h2>

        <div
          style={{
            width: 60,
            height: 4,
            background: "linear-gradient(90deg, #ffb5ce, #ffb0dc)",
            margin: "10px auto",
            borderRadius: 999,
          }}
        />
      </div>

      {/* SIDE BY SIDE CONTAINER */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
          alignItems: "start",
        }}
      >
        {/* LEFT SIDE - STORY */}
        <div>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: "#444" }}>
            I am a <b>developer and UX/UI designer</b> passionate about creating
            meaningful digital experiences. I combine technical development
            skills with creativity to build user-friendly and visually engaging
            solutions.
          </p>

          <p style={{ fontSize: 16, lineHeight: 1.8, color: "#444" }}>
            My focus is on <b>UX design, web development, and product thinking</b>.
            I enjoy turning ideas into real digital products that are both
            functional and visually appealing.
          </p>

          <p style={{ fontSize: 16, lineHeight: 1.8, color: "#444" }}>
            Outside of tech, I enjoy teaching young learners, exploring creative
            design, and improving my skills in modern digital tools.
          </p>

          {/* SKILLS */}
          <div style={{ marginTop: "2rem" }}>
            <h3 style={{ fontSize: 20, marginBottom: 12 }}>Skills</h3>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {skills.map((skill) => (
                <span
                  key={skill}
                  style={{
                    padding: "6px 12px",
                    borderRadius: 999,
                    background: "#fce4ec",
                    color: "#c2185b",
                    fontSize: 13,
                    fontWeight: 500,
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - EDUCATION */}
        <div>
          <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 15 }}>
            Education
          </h3>

          <div style={{ display: "grid", gap: 12 }}>
            {education.map((edu) => (
              <div
                key={edu.title}
                style={{
                  padding: "1rem",
                  borderRadius: 14,
                  background: "#fff",
                  border: "1px solid #f0f0f0",
                  boxShadow: "0 6px 16px rgba(0,0,0,0.05)",
                  transition: "0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-3px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <p
                  style={{
                    fontSize: 13,
                    color: "#ff4d8d",
                    fontWeight: 600,
                  }}
                >
                  {edu.year}
                </p>

                <p
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: "#1a1a2e",
                    marginTop: 4,
                  }}
                >
                  {edu.title}
                </p>

                <p style={{ fontSize: 13, color: "#666", marginTop: 2 }}>
                  {edu.school}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;