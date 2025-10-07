import Trendiva from "../../../src/assets/image/Trendiva.png";
import cruds from "../../../src/assets/image/cruds.png";
import airbnb from "../../../src/assets/image/airbnb.png";
import Everlane from "../../../src/assets/image/Everlane.png";

export const projectsData = [
  {
    title: "Shopping Platform",
    image: Trendiva,
    description:
      "Responsive e-commerce app built with Next.js featuring auth, cart, and favorites. Used React Hook Form + Zod for validation, Context API for state, lodash.debounce for optimized search, and Tailwind CSS for styling with SEO best practices.",
    tech: [
      "Nextjs",
      "Lodash.debounce",
      "Tailwind CSS ",
      "Zod & React Hook Form ",
      "Context API",
    ],
    demo: "https://trendiva.vercel.app/",
  },

  {
    title: "Airbnb",
    image: airbnb,
    description:
      "A simplified Airbnb clone built with [Next.js/React ], allowing users to search for available stays by country or city. Includes basic features such as cookie-based session handling and a responsive interface. ",
    tech: [
      "Nextjs",
      "Tailwind",
      "Typescript",
      "react-cookie-consent",
      "react-date-range",
    ],
    demo: "https://airbnb-d4vg.vercel.app/",
  },

  {
    title: "E-Commerce Platform",
    image: Everlane,
    description:
      "A high-performance, fully responsive e-commerce web application built with Next.js (App Router), TypeScript, Redux, and Tailwind CSS. Features product listing, detailed product pages, cart management, checkout flow, Google OAuth authentication, and optimized image handling.",
    tech: ["Nextjs", "Tailwind", "Redux toolkit", "Redux-Persist", "NextAuth"],
    demo: "https://everlane-sigma.vercel.app/",
  },

  {
    title: "CRUDS",
    image: cruds,
    description:
      "CRUDS is a simple web app built with vanilla JavaScript that lets users Create, Read, Update, and Delete records using Local Storage for data persistence. It features a clean interface with real-time search, filtering, and sorting, making it great for learning core web development concepts.",
    tech: ["Vanilla js", "CSS"],
    demo: "https://cruds-roan.vercel.app/",
  },
];
