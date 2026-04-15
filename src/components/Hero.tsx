import React from "react";
import heroImage from "../assets/Photo.jpeg";

const Hero: React.FC = () => {
  return (
    <section
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #fff0f5, #ffe4ec)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "3rem 1.5rem",
        fontFamily: "sans-serif",
      }}
    >
      <section id="Hero"></section>
<section id="about"></section>
<section id="Skills"></section>
<section id="Experience"></section>
<section id="Projects"></section>
<section id="Contact"></section>
      <div
        style={{
          maxWidth: 1100,
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
          alignItems: "center",
        }}
      >
        {/* LEFT CONTENT */}
        <div>
          <h1
            style={{
              fontSize: "3.5rem",
              fontWeight: 800,
              color: "#1a1a2e",
              marginBottom: "1rem",
              lineHeight: 1.1,
            }}
          >
            Hei, jeg er <span style={{ color: "#ff4d8d" }}>Kiya</span>
          </h1>

          <h2
            style={{
              fontSize: "1.4rem",
              fontWeight: 500,
              color: "#555",
              marginBottom: "1.5rem",
            }}
          >
            Software Developer & Digital Designer 
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.7,
              color: "#666",
              marginBottom: "2rem",
            }}
          >
            I design and build modern digital experiences by combining{" "}
            <b>creativity, technology, and human-centered design</b>.  
            My focus is creating clean, functional, and beautiful solutions
            that solve real problems.
          </p>

          {/* BUTTONS */}
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <button
              style={{
                padding: "12px 22px",
                borderRadius: 999,
                border: "none",
                cursor: "pointer",
                background: "linear-gradient(135deg, #ff4d8d, #ff7eb3)",
                color: "white",
                fontWeight: 600,
                fontSize: 14,
                boxShadow: "0 8px 20px rgba(255, 77, 141, 0.3)",
              }}
            >
              View My Work
            </button>

            <button
              style={{
                padding: "12px 22px",
                borderRadius: 999,
                border: "1px solid #ff4d8d",
                cursor: "pointer",
                background: "white",
                color: "#ff4d8d",
                fontWeight: 600,
                fontSize: 14,
              }}
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 320,
              height: 420,
              borderRadius: 24,
              overflow: "hidden",
              boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
              border: "4px solid white",
            }}
          >
            <img
              src={heroImage}
              alt="Kiya"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;