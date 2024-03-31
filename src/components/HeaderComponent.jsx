import React from "react";
import { Link } from "react-scroll";

function HeaderComponent() {
  return (
    <nav class="flex justify-between z-50 items-center py-4 px-4 lg:px-32 sticky top-0 bg-gray-200 shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]">
      <div class="font-bold text-2xl">Avto.dev</div>
      <div class="flex gap-4 text-lg font-semibold">
        <Link to="Home" smooth={true} duration={500}>
          Home
        </Link>{" "}
        <Link to="Projects" smooth={true} duration={500}>
          Projects
        </Link>{" "}
        <Link to="Contact" smooth={true} duration={500}>
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default HeaderComponent;
