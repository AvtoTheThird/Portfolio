import React from "react";
import htmllogo from "../icons/html.png";
import csslogo from "../icons/css.png";
import jslogo from "../icons/js.png";
import reactlogo from "../icons/react.png";
import nodelogo from "../icons/node.png";
import tail from "../icons/tail.png";
import "../app.css";
function Home() {
  return (
    <section className="flex flex-col items-center  lg:h-[75vh] justify-center ">
      <div className="block lg:flex items-center justify-center  w-screen lg:w-[800px]">
        <div>
          <h2 className="lg:text-left text-center text-6xl font-bold leading-snug py-2 text-gray-800">
            Front-End <span className="text-blue-500">React</span> Developer👋
          </h2>
          <h3 className="text-gray-600 text-lg lg:text-left text-center">
            Hi, im Avto, a pasionate front end developer based in Tbilisi,
            Georgia 📍
          </h3>
        </div>
        <div class="shape" className="w-[350xp] h-[350xp] ">
          <div class="bg-cover"></div>
        </div>
      </div>
      <div className="flex justify-start  ">
        <h2 className="flex lg:flex-row flex-col flex-wrap  gap-8 text-xl items-center text-md font-bold leading-snug mb-10 ">
          tech stack
          <div className="flex">
            <img width={"50px"} src={htmllogo} alt="" />
            <img width={"50px"} src={csslogo} alt="" />
            <img width={"41px"} src={jslogo} alt="" />
            <img width={"50px"} src={reactlogo} alt="" />
            <img width={"50px"} src={tail} alt="" />
            <img width={"50px"} src={nodelogo} alt="" />
          </div>
        </h2>
      </div>
    </section>
  );
}

export default Home;
