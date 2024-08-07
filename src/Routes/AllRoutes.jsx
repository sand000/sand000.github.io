import { Route, Routes } from "react-router-dom";
import About from "../components/About";
import Contact from "../components/Contact";
import Home from "../components/Home";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/sandhya" element={<Home />} />
      <Route path="/sandhya/about" element={<About />} />
      <Route path="/sandhya/projects" element={<Projects />} />
      <Route path="/sandhya/contact" element={<Contact />} />
      <Route path="/sandhya/skills" element={<Skills />} />
    </Routes>
  );
}

export default AllRoutes;
