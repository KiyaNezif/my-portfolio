import { useState } from "react";

type Category =
  | "All Projects"
  | "Design"
  | "Produktdesign"
  | "Utvikling"
  //| "Digitale produkter"
  | "Privat prosjekter";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  category: Exclude<Category, "All Projects">;
  image: string;
  gradient: string;
  link: string;
  figmaLink: string;


}

const projects: Project[] = [
  {
    id: 1,
    title: "Logos",
    description: "Brand identity design for a modern tech startup with focus on clean typography and strong visual identity.",
    tags: ["Branding", "Logo Design"],
    category: "Design",
    image: "/assets/Photo.jpeg",
    link: "https://yourportfolio.com/project/logo-1",
    gradient: "linear-gradient(135deg, #f9a8b8 0%, #f06292 50%, #e91e8c 100%)",
    figmaLink: ""
  },
  {
    id: 2,
    title: "Grafic Designs",
    description: "Minimal and calming brand identity for a wellness and mindfulness brand.",
    tags: ["Branding", "Identity Design"],
    category: "Design",
    image: "/assets/wellness.jpg",
    link: "https://yourportfolio.com/project/wellness-brand",
    gradient: "linear-gradient(135deg, #ffd7df 0%, #ffd0ea 50%, #ffc0e2 100%)",
    figmaLink: ""
  },
  {
    id: 3,
    title: "Branding",
    description: "Elegant and modern visual identity for a high-end restaurant brand.",
    tags: ["Branding", "Logo Design"],
    category: "Design",
    image: "/assets/restaurant.jpg",
    link: "https://yourportfolio.com/project/restaurant-brand",
    gradient: "linear-gradient(135deg, #ffe4ec 0%, #ffd0e1 50%, #ffb6d5 100%)",
    figmaLink: ""
  },
  {
    id: 4,
    title: "Graphics",
    description: "Stylish and modern branding for a fashion and lifestyle brand.",
    tags: ["Branding", "Typography"],
    category: "Design",
    image: "/assets/fashion.jpg",
    link: "https://yourportfolio.com/project/fashion-brand",
    gradient: "linear-gradient(135deg, #ffd7df 0%, #ffc0e2 50%, #ff99cc 100%)",
    figmaLink: ""
  },
  {
    id: 6,
    title: "Smart Home Control App",
    description: "A modern smart home mobile app that allows users to control lighting, temperature, and security systems in one place. Focus on usability, accessibility, and smooth interactions.",
    tags: ["UI/UX", "Mobile App", "Smart Home"],
    category: "Produktdesign",
    image: "/assets/smart-home.jpg",
    figmaLink: "https://figma.com/your-smart-home-project",
    gradient: "linear-gradient(135deg, #cce7ff 0%, #d6f0ff 50%, #e6f7ff 100%)",
    link: ""
  },
  {
    id: 7,
    title: "Launch Booking System",
    description: "A booking system design for scheduling services and appointments. Designed for simplicity, fast flow, and minimal user effort.",
    tags: ["UI/UX", "Booking System", "Web App"],
    category: "Produktdesign",
    image: "/assets/booking-system.jpg",
    figmaLink: "https://figma.com/your-booking-system",
    gradient: "linear-gradient(135deg, #ffe0ec 0%, #ffd6e8 50%, #ffc2dc 100%)",
    link: ""
  },
  {
    id: 8,
    title: "Parking Mobile App UX/UI",
    description: "A mobile app that helps users find, reserve, and pay for parking spots in real-time. Designed with a focus on maps, speed, and convenience.",
    tags: ["UI/UX", "Mobile App", "Parking System"],
    category: "Produktdesign",
    image: "/assets/parking-app.jpg",
    figmaLink: "https://figma.com/your-parking-app",
    gradient: "linear-gradient(135deg, #e0f7ff 0%, #d6ecff 50%, #cce3ff 100%)",
    link: ""
  },
  {
    id: 9,
    title: "Website",
    description: "A clean and modern food delivery app with focus on fast ordering, intuitive navigation, and visual food presentation.",
    tags: ["UI/UX", "Mobile App", "Food Delivery"],
    category: "Produktdesign",
    image: "/assets/food-app.jpg",
    figmaLink: "https://figma.com/your-food-app",
    gradient: "linear-gradient(135deg, #fff0d6 0%, #ffe4b8 50%, #ffd699 100%)",
    link: ""
  },
  
  {
    id: 12,
    title: "Enerhaugenhelsehus",
    description: "Modern and responsive website for a healthcare clinic with focus on accessibility, clarity, and patient-friendly design.",
    tags: ["Healthcare", "WordPress", "Web Development"],
    category: "Utvikling",
    image: "/assets/errehagen.jpg",
    link: "https://enerhaugenhelsehus.no",
    gradient: "linear-gradient(135deg, #d6f5ff 0%, #cceeff 50%, #b3e6ff 100%)",
    figmaLink: "https://enerhaugenhelsehus.no/"
  },
  {
    id: 13,
    title: "RKF Website",
    description: "Professional corporate website designed for clear communication and modern business presence.",
    tags: ["Web Design", "Business", "WordPress"],
    category: "Utvikling",
    image: "/assets/rkf.jpg",
    link: "https://www.stiftelsenrkf.no/",
    gradient: "linear-gradient(135deg, #ffe0ec 0%, #ffd1e6 50%, #ffb3d9 100%)",
    figmaLink: ""
  },
  {
    id: 14,
    title: "Netsanet.no Website",
    description: "Clean and modern personal/business website with focus on branding and user experience.",
    tags: ["Web Development", "design", "UI"],
    category: "Utvikling",
    image: "/assets/netsanet.jpg",
    link: "https://netsanet.no/",
    gradient: "linear-gradient(135deg, #e6ffe6 0%, #ccffcc 50%, #b3ffb3 100%)",
    figmaLink: ""
  },
  {
    id: 15,
    title: "Refdent Dental Clinic Website",
    description: "Professional dental clinic website with booking functionality and patient-focused UX design.",
    tags: ["Healthcare", "Booking System", "Web Development"],
    category: "Utvikling",
    image: "/.assets/Photo.jpeg",
    link: "https://rafdent.no",
    gradient: "",
    figmaLink: ""
  },
  {
    id: 16,
    title: "Graphic Design Collection",
    description: "A collection of modern graphic design works including posters, social media visuals, and brand elements focused on clean and aesthetic composition.",
    tags: ["Graphic Design", "Visual Identity", "Creativity"],
    category: "Privat prosjekter",
    image: "/assets/graphic-design.jpg",
    link: "https://yourportfolio.com/graphic-design",
    gradient: "linear-gradient(135deg, #ffd6e8 0%, #ffc2dc 50%, #ffb3d1 100%)",
    figmaLink: ""
  },
  {
    id: 17,
    title: "Apparel Design Collection",
    description: "Fashion and apparel design concepts including clothing prints, streetwear designs, and creative outfit branding ideas.",
    tags: ["Fashion Design", "Apparel", "Streetwear"],
    category: "Privat prosjekter",
    image: "/assets/apparel-design.jpg",
    link: "https://yourportfolio.com/apparel-design",
    gradient: "linear-gradient(135deg, #e0f7ff 0%, #cceeff 50%, #b3e6ff 100%)",
    figmaLink: ""
  },
  {
    id: 18,
    title: "Valentine Invitation Design",
    description: "Elegant and romantic invitation designs created for Valentine’s Day events, focusing on soft aesthetics, typography, and emotional design.",
    tags: ["Invitation Design", "Graphic Design", "Event Design"],
    category: "Privat prosjekter",
    image: "/images/product/valentine-invitation.jpg",
    link: "https://yourportfolio.com/valentine-invitation",
    gradient: "linear-gradient(135deg, #ffb6c1 0%, #ff99b6 50%, #ff6f91 100%)",
    figmaLink: ""
  },
  {
    id: 19,
    title: "Zodiac Sign Illustration Series",
    description: "A creative illustration series of zodiac signs with modern aesthetic style, combining symbolism, color theory, and visual storytelling.",
    tags: ["Illustration", "Zodiac", "Digital Art"],
    category: "Privat prosjekter",
    image: "/images/product/zodiac-signs.jpg",
    link: "https://yourportfolio.com/zodiac-signs",
    gradient: "linear-gradient(135deg, #d9cfff 0%, #c6b3ff 50%, #b399ff 100%)",
    figmaLink: ""
  },
];

const categories: Category[] = [
  "All Projects",
  "Design",
  "Produktdesign",
  "Utvikling",
  "Privat prosjekter",
];

const categoryIcons: Record<Category, string> = {
  "All Projects": "</>",
  Design: "",
  Produktdesign: "",
  Utvikling: "",
  "Privat prosjekter": "",
};

export default function Projects() {
  const [activeCategory, setActiveCategory] =
    useState<Category>("All Projects");

  const filtered =
    activeCategory === "All Projects"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <><section id="projects"></section><section
      style={{
        padding: "3rem 1.5rem",
        maxWidth: 1200,
        margin: "0 auto",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h2
          style={{
            fontSize: 36,
            fontWeight: 700,
            color: "#1a1a2e",
            margin: 0,
          }}
        >
          Prosjekter
        </h2>
        <div
          style={{
            width: 48,
            height: 4,
            background: "linear-gradient(90deg, #ffb5ce, #ffb0dc)",
            borderRadius: 2,
            margin: "0.75rem auto 0",
          }} />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 12,
          flexWrap: "wrap",
          marginBottom: "2.5rem",
        }}
      >
        {categories.map((cat) => {
          const isActive = cat === activeCategory;

          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "10px 22px",
                borderRadius: 999,
                border: isActive ? "none" : "1px solid #e0e0e0",
                background: isActive
                  ? "linear-gradient(135deg, #ffdeef, #ffdeef)"
                  : "white",
                color: isActive ? "#2c2121" : "#430909",
                fontWeight: 500,
                fontSize: 14,
                cursor: "pointer",
                transition: "all 0.2s ease",
                boxShadow: isActive
                  ? "0 4px 14px rgba(255, 158, 212, 0.25)"
                  : "none",
              }}
            >
              <span style={{ fontSize: 12 }}>{categoryIcons[cat]}</span>
              {cat}
            </button>
          );
        })}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: 24,
        }}
      >
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section></>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);

  return (
  <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "block",
        textDecoration: "none",
        borderRadius: 16,
        overflow: "hidden",
        background: "white",
        border: "1px solid #f0f0f0",
        boxShadow: hovered
          ? "0 12px 32px rgba(233,30,140,0.15)"
          : "0 2px 12px rgba(0,0,0,0.06)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        transition: "all 0.25s ease",
        cursor: "pointer",
        color: "inherit",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          height: 180,
          background: project.gradient,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 48,
        }}
      >
        {/* Optional: You can add image or icon here */}
      </div>

      <div style={{ padding: "1.25rem" }}>
        <h3
          style={{
            fontSize: 17,
            fontWeight: 700,
            color: "#1a1a2e",
            margin: "0 0 8px",
          }}
        >
          {project.title}
        </h3>

        <p
          style={{
            fontSize: 14,
            color: "#777",
            lineHeight: 1.6,
            margin: "0 0 16px",
          }}
        >
          {project.description}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                padding: "4px 12px",
                borderRadius: 999,
                background: "#fce4ec",
                color: "#c2185b",
                fontSize: 12,
                fontWeight: 500,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}