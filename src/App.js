import React from "react";
import "./index.css";
import Home from "./routes/Home";
import Hobbies from "./routes/Hobbies";
import Contact from "./routes/Contact";
import About from "./routes/About";
import Project from "./routes/Project";
import Other from "./routes/Other";

import { Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hobbies" element={<Hobbies/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/other" element={<Other/>}/>
      </Routes>
    </>
  );
}

export default App;
