import React from "react";
import li from "../icons/linekdin.png";
import ma from "../icons/mail.png";
import ph from "../icons/phone.png";
function Contact() {
  return (
    <div className=" block lg:flex items-center  justify-between lg:w-[900px] ">
      <div>
        <h2 className="text-center lg:text-left text-5xl lg:text-7xl  font-bold leading-snug py-2 text-gray-800">
          Lets <span className="text-blue-500">Start</span> a <br />
          Project
          <br />
          <span className="text-blue-500"> Together</span>
        </h2>
      </div>
      <div className="flex flex-col gap-8 text-gray-800">
        <a
          href="https://www.linkedin.com/in/avtandil-nariashvili/"
          className=" flex lg:flex-row flex-col justify-start items-center h-[100px] lg:w-[320px] lg:h-[80px] bg-gray-300  px-4 rounded-md"
        >
          <img width={"50px"} src={li} alt="" />
          <span className=" font-bold text-2xl px-6">linkedin</span>
        </a>
        <a className=" flex lg:flex-row flex-col justify-start items-center h-[100px] lg:w-[320px] lg:h-[80px] bg-gray-300  px-1 rounded-md">
          <img width={"50px"} src={ma} alt="" />
          <span className=" font-bold text-xl px-0">
            avtonariashvili@gmail.com
          </span>
        </a>
        <a className=" flex lg:flex-row flex-col justify-start items-center h-[100px] lg:w-[320px] lg:h-[80px] bg-gray-300  px-1 rounded-md">
          <img width={"50px"} src={ph} alt="" />
          <span className=" font-bold text-xl px-0">+995-568 22 08 71</span>
        </a>
      </div>
    </div>
  );
}

export default Contact;
