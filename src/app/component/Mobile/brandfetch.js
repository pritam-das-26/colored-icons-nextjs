import { useState } from "react";
import category from "../../utils/category";

export default function Brandfetch() {
  const [query, setQuery] = useState("Technology");
  const [isVisible, setIsVisible] = useState(true); 
  
  function handleClick(category) {
    setQuery(category);
    setIsVisible(!isVisible);
  }

  function setDropdown() {
    setIsVisible(!isVisible);
  }

  return (
    <div className=" justify-between items-center h-20 rounded-md">
      <div className="relative mt-1">
        <div
          className="cursor-pointer select-none  pl-3 pr-9 text-gray-900 absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
          onClick={() => handleClick(category)}
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
                onClick={() => handleClick(category)}
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
  );
}
