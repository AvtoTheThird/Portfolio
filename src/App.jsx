import { useState } from "react";
import HeaderComponent from "./components/HeaderComponent";
import Home from "./components/Home";
import Project from "./components/Project";
import projectsData from "./components/projects.json";
import Contact from "./components/Contact";
function App() {
  return (
    <>
      <HeaderComponent />
      <div id="Home">
        {" "}
        <Home />
      </div>
      <hr class=" h-[2px] bg-gray-300 m-8 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]" />

      <div
        id="Projects"
        className="flex flex-col justify-center  items-center py-4 px-16 gap-10 "
      >
        <div class="flex justify-start lg:w-[900px]">
          <span class=" text-blue-700 font-bold text-xl">Projects</span>
        </div>
        {projectsData.map((project, index) => (
          <Project key={index} data={project} />
        ))}
      </div>
      <div
        id="Contact"
        className="flex flex-col justify-center  items-center px-16  bg-slate-100 py-20 "
      >
        <div class="flex justify-start lg:w-[900px]">
          <span class=" text-blue-700 font-bold text-xl">Contact</span>
        </div>
        <Contact />
      </div>
    </>
  );
}

export default App;
