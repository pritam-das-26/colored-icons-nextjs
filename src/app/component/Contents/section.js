"use client";
import logos from "../../Icons/icons";
import { useState } from "react";
import logoToEmail from "../../utils/logoToEmail";
import LogoModal from "../modals/modal2";
import category from "../../utils/category";
import {
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
function Display() {
  const [visible, setVisible] = useState(false);
  const [selectedLogo, setSelectedLogo] = useState(null);
  const [arr, setArr] = useState(logos);
  const [query, setQuery] = useState("Technology");
  const [isVisible, setIsVisible] = useState(true);

  function handleClick2(category) {
    setQuery(category);
    setIsVisible(!isVisible);
  }

  function setDropdown() {
    setIsVisible(!isVisible);
  }

  function handleClick(logo) {
    setSelectedLogo(logo);
    setVisible(true);
  }

  function closeModal() {
    setSelectedLogo(null);
    setVisible(false);
  }

  function modify(category) {
    const filteredLogos = logos.filter(
      (logo) => logo.category.toUpperCase() === category.toUpperCase()
    );
    setArr(filteredLogos);
  }

  return (
    <div className="mt-8 flex flex-col justify-center items-center w-full ">
      
     
         

        <div className="w-3/4 rounded-md mt-12">
         
         <h3 className="font-bold text-4xl leading-tight ">
            Most Popular
            <br/>
            Brand Categories
          </h3>
        
          <div className="relative mt-12">
            <div
              className="cursor-pointer select-none text-sm  p-2 text-gray-900 absolute mt-1 h-12 w-full  rounded-md bg-white overflow-hidden ring-1 ring-black ring-opacity-5 focus:outline-none "
              onClick={() => handleClick2(category)}
            >
              <div className="flex items-center p-1 ">
                <span className="ml-3">{query}</span>
                <ChevronDownIcon className="h-6 w-4 absolute right-4 text-gray-400 text-sm" />
              </div>
            </div>

            <div className="absolute inset-y-0 right-0 flex w-full items-center rounded-r-md px-2 focus:outline-none"></div>
            {isVisible && (
              <div className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {category.map((category) => (
                  <div
                    key={category}
                    className="relative cursor-pointer select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-gray-500 hover:text-white"
                    onClick={() => handleClick2(category)}
                    onClickCapture={() => modify(category)}
                  >
                    <div className="flex items-center">
                      <span className="ml-3">{category}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
      </div>

      <div className="mt-8 hidden justify-center gap-8  md:flex">
        <div>
          <div className="grid grid-cols-1 ">
            <div
              className="hover:bg-gray-100 rounded-md font-bold text-lg text-gray-600 mt-8  p-1"
              onClick={() => modify("technology")}
            >
              Technology
            </div>
            <div
              className="hover:bg-gray-100 rounded-md font-bold text-lg text-gray-600 mt-8 border-2 border-black-400 p-1"
              onClick={() => modify("services")}
            >
              Services
            </div>
            <div
              className="hover:bg-gray-100 rounded-md font-bold text-lg text-gray-600 mt-8 border-2 border-black-400 p-1"
              onClick={() => modify("food and beverages")}
            >
              Food and Beverages
            </div>
            <div
              className="hover:bg-gray-100 rounded-md font-bold text-lg text-gray-600 mt-8 border-2 border-black-400 p-1"
              onClick={() => modify("travel and tourism")}
            >
              Travel and Tourism
            </div>
            <div className="hover:bg-gray-100 rounded-md font-bold text-lg text-gray-600 mt-8 border-2 border-black-400 p-1">
              Automobile
            </div>
            <div className="hover:bg-gray-100 rounded-md font-bold text-lg text-gray-600 mt-8 border-2 border-black-400 p-1">
              Music
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 w-3/4 mb-8">
        <ul className=" rounded-md  grid grid-cols-1  overflow-hidden hover:overflow-y-auto mt-8 gap-y-3 ">
          {arr.map((logo) => (
            <li
              key={logo.name}
              className="rounded-md border-2 h-20 w-full hover:border-blue-500 hover:cursor-pointer flex p-5 gap-2 items-center"
              onClick={() => handleClick(logo)}
            >
              <i className={`${logo.class}  ci-3x`}></i>
              <div className="flex flex-col justify-center p-4">
                <div className="text-black text-base font-bold">
                  {logo.name}
                </div>
                <div className=" text-xs text-gray-400">
                  {logoToEmail(logo.name)}
                </div>
              </div>
            </li>
          ))}
        </ul>

        {visible && selectedLogo && (
          <LogoModal
            logo={selectedLogo}
            onClose={closeModal}
            visibility={visible}
          />
        )}
      </div>
    </div>
  );
}

export default Display;
