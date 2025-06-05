import homevibe from "../../../src/assets/image/home-vibe.png";
import cruds from "../../../src/assets/image/cruds.png";
import chatbot from "../../../src/assets/image/chatbot.png";
import todo from "../../../src/assets/image/todolist.png";

export const projectsData = [
  {
    title: "HomeVibe",
    image: homevibe,
    description:
      "HomeVibe high-quality furniture that transforms your space. Enjoy a smooth shopping experience with easy navigation, login. And add items to your cart, checkout seamlessly with secure payment options.",
    tech: ["React", "Redux", "React Router", "Framer Motion", "CSS"],
    demo: "https://home-vibe-git.vercel.app/",
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
