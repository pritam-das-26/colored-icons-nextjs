"use client";
import Example from "../modals/modal3";
import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";


function Header() {
  const [visible, setVisible] = useState(false);

  function click() {
    setVisible(true);
  }

  function closeModal() {
    setVisible(false);
  }

  return (
    <div className="flex flex-col mt-28  w-full items-center justify-center">
      <div className=" w-full flex flex-col items-center justify-center p-4 ">
        <span className="font-sans text-center font-bold text-4xl ">
          All Icons.
        </span>
        <span className="font-sans text-center font-bold text-4xl">
          In One Place
        </span>
      </div>

      <div className="w-full">
        <p className="font-serif p-8 text-xl">
          Colored Icons is the home for all the Icons ever Imagined.
          <br className="block" />
          The library covers a whole range of sizes and styles ever think of.
        </p>
      </div>

      <div className="p-4 w-full h-28 flex-1 mt-8">
        <div className="relative">
          <input
            onClick={() => click() }
            className="w-full h-12 rounded-full border-blue-500 border-4 pl-12" 
            type="text"
            placeholder="Search any icon"
          />
          <MagnifyingGlassIcon className="absolute h-6 left-3 top-3 text-gray-400" />
        </div>
      </div>

      <div className="flex-none">
        {visible && <Example onClose={closeModal} />}
      </div>
    </div>
  );
}

export default Header;
