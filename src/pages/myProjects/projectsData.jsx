import Trendiva from "../../../src/assets/image/Trendiva.png";
import cruds from "../../../src/assets/image/cruds.png";
import chatbot from "../../../src/assets/image/chatbot.png";
import todo from "../../../src/assets/image/todolist.png";

export const projectsData = [
  {
    title: "E-Commerce Web Application",
    image: Trendiva,
    description:
      "Developed a full-featured, responsive e-commerce web application using Next.js",
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
    title: "CRUDS",
    image: cruds,
    description:
      "CRUDS is a simple app to Create, Read, Update, and Delete records using vanilla JavaScript and Local Storage for persistent data. It features a clean interface with real-time search, filtering, and sorting — ideal for learning web development",
    tech: ["Vanilla js", "CSS"],
    demo: "https://cruds-roan.vercel.app/",
  },

  {
    title: "Chat Bot",
    image: chatbot,
    description:
      "This project is a chatbot built to interact with users through text, It can answer queries, and integrate with external services like APIs. The chatbot is designed for ease of use and scalability..",
    tech: ["Vanilla js", "CSS"],
    demo: "https://chat-gpt-three-ashy.vercel.app/",
  },

  {
    title: "TODO List",
    image: todo,
    description:
      "This project is a simple To-Do List application that allows users to create, update, and delete tasks. It provides an intuitive interface to organize daily activities, with features like task prioritization and status tracking",
    tech: ["Vanilla js", "CSS"],
    demo: "https://today-list.vercel.app/",
  },
];
