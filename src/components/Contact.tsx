import React from "react";

export default function Connect() {
  const connectItems = [
    {
      id: 1,
      label: "Portfolio",
      value: "View my design & development work",
      href: "https://yourportfolio.com",
    },
    {
      id: 2,
      label: "LinkedIn",
      value: "Connect with me professionally",
      href: "https://linkedin.com/in/yourprofile",
    },
    {
      id: 3,
      label: "GitHub",
      value: "Explore my coding projects",
      href: "https://github.com/yourusername",
    },
    {
      id: 4,
      label: "Instagram",
      value: "Follow my creative journey",
      href: "https://instagram.com/yourusername",
    },
  ];

  return (
    <section
      style={{
        padding: "4rem 1.5rem",
        maxWidth: 1100,
        margin: "0 auto",
        fontFamily: "sans-serif",
      }}
    >
      {/* HEADER */}
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h2 style={{ fontSize: 38, fontWeight: 700, color: "#1a1a2e" }}>
        </h2>

        <p
          style={{
            color: "#666",
            maxWidth: 520,
            margin: "10px auto 0",
            fontSize: 15,
            lineHeight: 1.6,
          }}
        >
    
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
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: 20,
        }}
      >
        {connectItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <div
              style={{
                padding: "1.5rem",
                borderRadius: 18,
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
              {/* LABEL */}
              <h3
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: "#1a1a2e",
                  marginBottom: 6,
                }}
              >
                {item.label}
              </h3>

              {/* VALUE */}
              <p
                style={{
                  fontSize: 14,
                  color: "#666",
                  lineHeight: 1.5,
                }}
              >
                {item.value}
              </p>

              {/* SMALL ARROW EFFECT */}
              <div
                style={{
                  marginTop: 12,
                  fontSize: 12,
                  color: "#ff4d8d",
                  fontWeight: 600,
                }}
              >
                → Open link
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}