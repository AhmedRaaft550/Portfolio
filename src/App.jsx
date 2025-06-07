import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navBar/NavBar";
import "../src/global.css";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/contact/Contact";
import LandingIntro from "./landing/Landing";
import About from "./pages/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./pages/myProjects/Projects";
import Footer from "./components/footer/Footer";
import Certification from "./components/certification/Certification";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <LandingIntro /> <About /> <Skills /> <Projects />{" "}
              <Certification /> <Contact />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
