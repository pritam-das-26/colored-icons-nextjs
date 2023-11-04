"use client"
import { useState } from "react";
import Example from "../modals/modal3";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";

import Install from "../modals/installation";

function Nav() {
  const [visible, setVisible] = useState(false);
  const [visInstall, setVisInstall] = useState(false);

  function click() {
    setVisible(true);
  }

  function closeModal() {
    setVisible(false);
  }

  function hover() {
    setVisInstall(true);
  }

  function unhover() {
    setVisInstall(false);
  }

  return (

    <div className="flex-col  justify-center item-center transition-shadow bg-white z-40 fixed top-0 w-full h-12 shadow-sm scroll-snap-start">
      <div className="flex h-1 w-100% justify-between">
        <div className="bg-blue-400 w-96"></div>
        <div className="bg-purple-900 w-48"></div>
        <div className="bg-rose-500 w-72 "></div>
        <div className="bg-yellow-400 w-48"></div>
        <div className="bg-green-600 w-96"></div>
      </div>

      <div className="flex mt-2 h-4 space-between">
       
        <aside className="">
          <h1 className="font-dancing-script text-xl md:text-4xl font-bold md:mt-2">
            Colored Icons
          </h1>
        </aside>

        <div className="p-4 w-1/2 invisible md:visible">
          <ul className="flex gap-4 font-semibold text-lg">
            <li className="hover:text-blue-400">Why ColoredIcons?</li>
            <div
              className="flex w-96 hover:text-blue-400 cursor-pointer"
              onMouseEnter={hover}
             
            >
              <li>Installation</li>
              <ChevronDownIcon className="h-8 w-6" />
            </div>
          </ul>
          {visInstall && <Install  onMouseLeave={unhover} />}
        </div>

      
          <button className="" onClick={() => click()}>
            <MagnifyingGlassIcon className="h-6" />
          </button>

        <div className="flex-none">
          {visible && <Example onClose={closeModal} />}
        </div>
      </div>
    </div>
  );
}

export default Nav;
