import { useState } from "react";
import HeaderComponent from "./components/HeaderComponent";
import Home from "./components/Home";
import Project from "./components/Project";
import projectsData from "./components/projects.json";

function App() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
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
        {/* <Project /> */}
      </div>
    </>
  );
}

export default App;
