import React, { useEffect, useState } from "react";

const Navbar: React.FC = () => {
  const [active, setActive] = useState("Home");

  const navItems = [
    "Home",
    "About",
    "Skills",
    "Experience",
    "Projects",
    "Contact",
  ];

  const handleClick = (item: string) => {
    setActive(item);

    const section = document.getElementById(item.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // 👇 auto highlight section while scrolling
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      navItems.forEach((item) => {
        const section = document.getElementById(item.toLowerCase());

        if (!section) return;

        const offsetTop = section.offsetTop;
        const offsetHeight = section.offsetHeight;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActive(item);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(255,255,255,0.85)",
        backdropFilter: "blur(12px)",
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
      }}
    >
      {/* LOGO */}
      <h1
        style={{
          color: "#1a1a2e",
          fontWeight: 800,
          fontSize: "1.5rem",
          cursor: "pointer",
        }}
        onClick={() => handleClick("Home")}
      >
        Kiya<span style={{ color: "#ffb8d5" }}>.</span>
      </h1>

      {/* NAV ITEMS */}
      <ul
        style={{
          display: "flex",
          gap: "1.8rem",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        {navItems.map((item) => {
          const isActive = active === item;

          return (
            <li
              key={item}
              onClick={() => handleClick(item)}
              style={{
                cursor: "pointer",
                fontSize: "0.95rem",
                fontWeight: 500,
                color: isActive ? "#ff7eb3" : "#444",
                position: "relative",
                transition: "0.2s ease",
              }}
              onMouseEnter={(e) => {
                if (!isActive) e.currentTarget.style.color = "#ff7eb3";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = isActive ? "#ff7eb3" : "#444";
              }}
            >
              {item}

              {/* ACTIVE LINE */}
              {isActive && (
                <div
                  style={{
                    height: "2px",
                    width: "100%",
                    background: "linear-gradient(90deg, #ff7eb3, #ffb8d5)",
                    position: "absolute",
                    bottom: -6,
                    left: 0,
                    borderRadius: 999,
                  }}
                />
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;