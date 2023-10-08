import { useState } from "react";
import logos from "../../Icons/icons";
import LogoModal from "./modal2";

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
    <div className="fixed inset-0 flex items-center justify-center z-10 backdrop-blur-lg">
      <div className="modal-container w-1/2 justify-between rounded-md">
        <div className="flex justify-between">
          <label
            htmlFor="search"
            className="block text-sm font-medium text-gray-700"
          >
            Search logos
          </label>

          <button
            className="bg-zinc-400 text-white w-12 rounded-md hover:cursor-pointer"
            onClick={onClose}
          >
            X
          </button>
        </div>

        <div className="relative mt-1">
          <input
            type="text"
            id="search"
            className="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
            placeholder="Type a logo name..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <div className="absolute inset-y-0 right-0 flex w-96 items-center rounded-r-md px-2 focus:outline-none"></div>

          {filteredLogos.length > 0 && (
            <div className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredLogos.map((logo) => (
                <div
                  key={logo.name}
                  className="relative cursor-pointer select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-gray-500 hover:text-white"
                  onClick={() => click(logo)}
                >
                  <div className="flex items-center">
                    <i className={`${logo.class} w-32 text-black ci-2xl`}></i>
                    <span className="ml-3">{logo.name}</span>
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
