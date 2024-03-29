import React from "react";

function HeaderComponent() {
  return (
    <nav class="flex justify-between items-center py-4 px-4 lg:px-32 shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]">
      <div class="font-bold text-2xl">Avto.dev</div>
      <div class="flex gap-4 text-lg font-semibold">
        <a href="">home</a>
        <a href="">about</a>
        <a href="">projects</a>
        <a href="">contact</a>
      </div>
    </nav>
  );
}

export default HeaderComponent;
