"use client";
import logos from "../../Icons/icons";
import { useState } from "react";
import logoToEmail from "../../utils/logoToEmail";
import LogoModal from "../modals/modal2";
import category from "../../utils/category";
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
    const filteredLogos = logos.filter((logo) => logo.category.toUpperCase() === category.toUpperCase());
    setArr(filteredLogos);
  }

  return (
    <div className="mt-4 flex flex-col justify-center items-center ">
      <div className="w-48 mt-4">
        <h1 className="font-semibold text-2xl">
          Most Popular Brand Categories
        </h1>
        <div className=" items-center  ">
          <div className=" justify-between items-center h-20 rounded-md">
            <div className="relative mt-1">
              <div
                className="cursor-pointer select-none  pl-3 pr-9 text-gray-900 absolute mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                onClick={() => handleClick2(category)}
              >
                <div className="flex items-center">
                  <span className="ml-3">{query}</span>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex w-96 items-center rounded-r-md px-2 focus:outline-none"></div>
              {isVisible && (
                <div className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {category.map((category) => (
                    <div
                      key={category}
                      className="relative cursor-pointer select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-gray-500 hover:text-white"
                      onClick={() => handleClick2(category)
                      }
                      onClickCapture={()=> modify(category)}
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

      <div>
        <ul className=" rounded-md  grid grid-cols-1 h-96 overflow-hidden hover:overflow-y-auto mt-8 gap-y-12 ">
          {arr.map((logo) => (
            <li
              key={logo.name}
              className="rounded-md border-2 h-20 w-48 hover:border-blue-500 hover:cursor-pointer flex p-2 gap-4 items-center"
              onClick={() => handleClick(logo)}
            >
              <i className={`${logo.class}  ci-3x`}></i>
              <div className="flex flex-col justify-center">
                <div className="text-black text-base font-bold">
                  {logo.name}
                </div>
                <div className=" text-base text-gray-500">
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
