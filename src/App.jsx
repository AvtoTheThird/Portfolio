import { useState } from "react";
import HeaderComponent from "./components/HeaderComponent";
import Home from "./components/Home";
import Project from "./components/Project";
import projectsData from "./components/projects.json";

function App() {
  return (
    <>
      <HeaderComponent />
      <Home />
      <div className="flex flex-col justify-center  items-center py-4 px-16 gap-10 ">
        {projectsData.map((project, index) => (
          <Project key={index} data={project} />
        ))}
        {/* <Project /> */}
      </div>
    </>
  );
}

export default App;
