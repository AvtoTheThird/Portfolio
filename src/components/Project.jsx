import React from "react";
import CarouselDApiDemo from "./CarouselM";
import projectsData from "./projects.json";
// import foto from "../fotos/1.png";
import gitlogo from "../icons/git.png";
import linklogo from "../icons/link.png";
function Project(props) {
  //   console.log(props.data?.images);
  return (
    <div className="lg:w-[900px] lg:h-[400px] block lg:flex justify-start items-center text-gray-900 bg-gray-300 rounded-md overflow-hidden shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
      <div className="px-16 scale-150 ">
        <CarouselDApiDemo images={props.data?.images}>
          {/* <img src={foto} alt="" /> */}
        </CarouselDApiDemo>
      </div>
      <div className="text-top w-[450px] px-10 text-center">
        <h2 className="font-bold text-4xl">{props.data?.name}</h2>
        <h3>{props.data?.description}</h3>
        <div className="flex justify-center items-center gap-8">
          {" "}
          <a target="_blank" href={props.data?.git}>
            <img
              className="transition-transform duration-300 transform hover:scale-150"
              width={"40px"}
              src={gitlogo}
              alt=""
            />
          </a>
          {props.data?.link.length > 0 ? (
            <a target="_blank" href={props.data?.link}>
              <img
                className="transition-transform duration-300 transform hover:scale-150"
                width={"40px"}
                src={linklogo}
                alt=""
              />
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Project;
