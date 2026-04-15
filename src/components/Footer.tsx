import React from "react";
import { colors } from "../constants/colors";

const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: colors.accentPink, color: colors.white, padding: "2rem", textAlign: "center" }}>
      <p>&copy; {new Date().getFullYear()} Kiya Nezif Abagojjam. All rights reserved.</p>
    </footer>
  );
};

export default Footer;