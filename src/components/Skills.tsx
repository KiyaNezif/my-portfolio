import { Code, Palette, Wrench } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: "Development",
      description: "Building modern, responsive and scalable web applications",
      gradient: "linear-gradient(135deg, #ffd6e8, #ffc2dc, #ffb3d1)",
      skills: [
        "React",
        "TypeScript",
        "Node.js",
        "C#",
        "ASP.NET Core",
        "REST APIs",
      ],
    },
    {
      icon: Palette,
      title: "Design",
      description: "Creating clean, aesthetic and user-centered visual designs",
      gradient: "linear-gradient(135deg, #ffd6e8, #ffc2dc, #ffb3d1)",
      skills: [
        "UI/UX Design",
        "Figma",
        "Brand Identity",
        "Graphic Design",
        "Canva",
        "Visual Design",
      ],
    },
    {
      icon: Wrench,
      title: "Tools & Platforms",
      description: "Professional tools used in development and design workflow",
      gradient: "linear-gradient(135deg, #ffd6e8, #ffc2dc, #ffb3d1)",
      skills: [
        "WordPress",
        "Shopify",
        "Git & GitHub",
        "VS Code",
        "Adobe Creative Suite",
      ],
    },
  ];

  return (
    <section
      id="skills"
      style={{
        padding: "4rem 1.5rem",
        maxWidth: 1200,
        margin: "0 auto",
        fontFamily: "sans-serif",
      }}
    >
      {/* HEADER */}
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h2 style={{ fontSize: 38, fontWeight: 700, color: "#1a1a2e" }}>
          Skills & Expertise
        </h2>
        <p
          style={{
            color: "#666",
            maxWidth: 600,
            margin: "10px auto 0",
            fontSize: 15,
            lineHeight: 1.6,
          }}
        >
          A mix of development, design and digital tools used to create modern
          web experiences and visual identities.
        </p>

        <div
          style={{
            width: 60,
            height: 4,
            background: "linear-gradient(90deg, #ffb5ce, #ffb0dc)",
            borderRadius: 2,
            margin: "1rem auto 0",
          }}
        />
      </div>

      {/* GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: 24,
        }}
      >
        {skillCategories.map((category) => (
          <div
            key={category.title}
            style={{
              borderRadius: 18,
              overflow: "hidden",
              background: "white",
              border: "1px solid #f0f0f0",
              boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
              transition: "all 0.25s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-6px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            {/* TOP AREA */}
            <div
              style={{
                height: 120,
                background: category.gradient,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <category.icon size={34} color="white" />
            </div>

            {/* CONTENT */}
            <div style={{ padding: "1.25rem" }}>
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: "#1a1a2e",
                  marginBottom: 6,
                }}
              >
                {category.title}
              </h3>

              <p
                style={{
                  fontSize: 13,
                  color: "#777",
                  lineHeight: 1.5,
                  marginBottom: 14,
                }}
              >
                {category.description}
              </p>

              {/* SKILLS TAGS */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 8,
                }}
              >
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      fontSize: 12,
                      padding: "5px 10px",
                      borderRadius: 999,
                      background: "#fce4ec",
                      color: "#c2185b",
                      fontWeight: 500,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}