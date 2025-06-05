// src/data/skillsData.js
import html from "../../assets/image/html.png";
import css from "../../assets/image/css.png";
import js from "../../assets/image/js.jpg";
import ts from "../../assets/image/ts.png";
import react from "../../assets/image/react.svg";
import bootstrap from "../../assets/image/bootstrap.jpeg";
import next from "../../assets/image/nextjs.png";
import framer from "../../assets/image/framer motion.png";
import redux from "../../assets/image/redux.jpeg";
import reduxtoolkit from "../../assets/image/reduxtoolkit.png";
import git from "../../assets/image/git.webp";
import github from "../../assets/image/github.png";
import devTools from "../../assets/image/devtools.jpg";
import api from "../../assets/image/api.png";
import responsive from "../../assets/image/responsive-icon.jpg";
import seo from "../../assets/image/seo.jpeg";
import accessibility from "../../assets/image/computer-icons.jpg";

export const skillsData = {
  languages: [
    { name: "HTML 5", icon: html },
    { name: "CSS 3", icon: css },
    { name: "JavaScript (ES6+)", icon: js },
    { name: "TypeScript", icon: ts },
  ],
  frameWorks: [
    { name: "React", icon: react },
    { name: "Bootstrap", icon: bootstrap },
    { name: "Next.js", icon: next },
    { name: "Framer Motion", icon: framer },
    { name: "Redux", icon: redux },
    { name: "Redux Toolkit", icon: reduxtoolkit },
  ],
  tools: [
    { name: "Git", icon: git },
    { name: "GitHub", icon: github },
    { name: "Chrome DevTools", icon: devTools },
  ],
  others: [
    { name: "APIs", icon: api },
    { name: "Responsive", icon: responsive },
    { name: "SEO Basics", icon: seo },
    { name: "Accessibility", icon: accessibility },
  ],
};
