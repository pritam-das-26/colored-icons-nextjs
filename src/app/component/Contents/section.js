"use client"
import logos from "../../Icons/icons";
import { useState } from "react";
import logoToEmail from "../../utils/logoToEmail";
import LogoModal from "../modals/modal2";

function Display() {
  const [visible, setVisible] = useState(false);
  const [selectedLogo, setSelectedLogo] = useState(null);
  const [arr, setArr] = useState(logos);

  function handleClick(logo) {
    setSelectedLogo(logo);
    setVisible(true);
  }

  function closeModal() {
    setSelectedLogo(null);
    setVisible(false);
  }

  function modify(category) {
    const filteredLogos = logos.filter((logo) => logo.category === category);
    setArr(filteredLogos);
  }

  return (
    <div className="mt-16 flex flex-col justify-center ">
      <div className="w-96 mt-4 ml-56">
        <h1 className="font-semibold text-4xl">
          Most Popular Brand Categories
        </h1>
      </div>

      <div className="mt-8 flex justify-center gap-8 ">
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
            <div className="hover:bg-gray-100 rounded-md font-bold text-lg text-gray-600 mt-8 border-2 border-black-400 p-1"
            onClick={()=>modify("travel and tourism")}>
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

        <ul className=" rounded-md mt-2 grid grid-cols-3 h-96 overflow-hidden hover:overflow-y-auto mt-8 gap-y-12 gap-4 p-4">
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
                <div className="text-black text-base text-gray-500">
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
