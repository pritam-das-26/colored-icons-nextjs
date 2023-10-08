"use client"
import Example from "../modals/modal3";
import { useState } from "react";

function Header() {
  const [visible, setVisible] = useState(false);

  function click() {
    setVisible(true);
  }

  function closeModal() {
    setVisible(false);
  }

  return (
    <div className="flex  mt-4 justify-between items-center">
      
      <div className="flex w-1/4 flex-col gap-56 mt-4">
        <img src="/shapes/circle.jpeg" className="ml-16 h-16 w-16"></img>
        <img src="/shapes/triangle.jpeg" className=" h-32 w-32"></img>
      </div>

        <div className=" w-1/2 flex flex-col items-center justify-center ">
          <h1 className="font-sans text-center  font-semibold text-6xl md:text-8xl">
            All Icons In. One Place
          </h1>
          <h2 className="font-serif font-sm text-base md:text-2xl mt-8">
            Colored Icons is the home for all the Icons ever Imagined. The
            library covers a whole range of sizes and styles ever think of.
          </h2>
          <div className="p-4 w-3/4 h-28 flex-1 mt-8 ">
            <input
              onClick={() => click()}
              className="w-full h-12 rounded-full border-blue-500 border-4"
              type="text"
              placeholder="  Search any icon"
            ></input>
          </div>
        </div>
      

      <div className="flex-none">
        {visible && <Example onClose={closeModal} />}
      </div>

      <div className="flex flex-col gap-48 w-1/4">
        <img src="" className="h-20 w-20"></img>
        <img src=""></img>
      </div>
    </div>
  );
}

export default Header;
