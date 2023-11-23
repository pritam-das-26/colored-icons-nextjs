"use client";
import Example from "../modals/modal3";
import { useState } from "react";
import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
function Header() {
  const [visible, setVisible] = useState(false);

  function click() {
    setVisible(true);
  }

  function closeModal() {
    setVisible(false);
  }

  return (
    <div className="flex flex-col mt-20  w-full items-center justify-center ">
      <div className=" w-full flex flex-col items-center justify-center p-4 relative ">
        <div class="bg-green-500 transform -rotate-6 absolute h-24 w-24 -right-5 -z-10 overflow-hidden "></div>
        <div class="bg-pink-500 transform -rotate-6 absolute h-24 w-24 top-96 -left-8 -z-10  overflow-hidden"></div>
        <div class="bg-blue-500 transform -rotate-6 absolute h-24 w-24 -left-4 top-48 rounded-full -z-10 overflow-hidden"></div>
        <div class="bg-yellow-300 transform  absolute h-48 w-48 top-96 -right-16 rounded-full -z-10 overflow-hidden"></div>

        <span className="text-center font-bold text-5xl mt-6 leading-tight">
          All Icons.
        </span>
        <span className="text-center font-bold text-5xl leading-tight">
          In One Place
        </span>
      </div>

      <div className="w-full">
        <p className=" p-8 text-lg text-gray-700 opacity-1 text-center ">
          Colored Icons is the home for all the Icons.
          <br className="block" />
          This extensive library covers a whole range of different sizes and styles for icons.
        </p>
      </div>

      <div className="p-4 w-full flex-1 ">
        <div className="relative">
          <input
            onClick={() => click()}
            className="w-full h-14 rounded-full border-blue-500 border-4 pl-16"
            type="text"
            placeholder="Search any icon"
          />
          <MagnifyingGlassIcon className="absolute h-6 left-6 top-4 p-0.5 text-gray-400" />
          <div className="absolute h-6 right-4 top-4 text-gray-300 font-sans font-normal text-base whitespace-nowrap">
            Ctrl K
          </div>
        </div>
      </div>

      <a href="#" target="_blank" className="mt-4">
        <div className="bg-gray-100 shadow-md text-gray-400 transition  rounded-full gap-3 justify-center px-6 inline-flex items-center text-center cursor-pointer mx-auto h-10">
          <p>
            <span className="font-light text-sm opacity-100 ">
              &#128079;
            </span>
          </p>
          <p className="font-semibold text-sm opacity-100 ">
            Add your icon on colored-icon
          </p>
          <ChevronDoubleRightIcon className="align-middle inline-flex leading-none opacity-100 h-4" />
        </div>
      </a>

      <div className="flex-none">
        {visible && <Example onClose={closeModal} />}
      </div>
    </div>
  );
}

export default Header;
