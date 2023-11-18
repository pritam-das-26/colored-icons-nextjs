import { useState } from "react";
import logos from "../../Icons/icons";
import LogoModal from "./modal2";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export default function Example({ onClose }) {
  const [query, setQuery] = useState("");
  const [selectedLogo, setSelectedLogo] = useState(null);
  const [visible, setVisible] = useState(false);

  function click(logo) {
    setVisible(true);
    setSelectedLogo(logo);
  }

  function closeModal() {
    setVisible(false);
  }

  const filteredLogos =
    query === ""
      ? logos
      : logos.filter((logo) => {
          return logo.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <div className="fixed inset-0 flex items-center justify-center z-10 backdrop-blur-lg bg-gray-251 will-change-visibility will-change-opacity  transition-all duration-200 ease-in-out overflow-auto  visible opacity-100">
      <div className="modal-container w-3/4 justify-between rounded-md">

        <div className="relative mt-1">
          <input
            type="text"
            id="search"
            className="w-full rounded-full border-blue-500 border-2  pl-16 p-2 shadow-sm opacity-1  focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
            placeholder="Type a logo name..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <MagnifyingGlassIcon className="absolute h-6 left-6 top-3 text-gray-400" />
          {filteredLogos.length > 0 && (
            <div className="absolute z-10 p-4 mt-4 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredLogos.map((logo) => (
                <div
                  key={logo.name}
                  className="relative cursor-pointer select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-gray-500 hover:text-white"
                  onClick={() => click(logo)}
                >
                  <div className="flex items-center">
                    <i className={`${logo.class} w-32 text-black ci-2xl`}></i>
                    <span className="ml-3 font-medium">{logo.name}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div>
            {visible && selectedLogo && (
              <LogoModal logo={selectedLogo} onClose={closeModal} visibility={visible} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
