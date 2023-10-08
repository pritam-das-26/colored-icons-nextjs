import { useState, useEffect } from "react";
import { DocumentDuplicateIcon } from "@heroicons/react/24/solid";


function LogoModal({ logo, onClose, visibility }) {
  const [logoClass, setLogoClass] = useState("horizontal");
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    const parentSpan = event.target.closest("span");
    if (parentSpan) {
      const contentToCopy = parentSpan.textContent;
      const textArea = document.createElement("textarea");
      textArea.value = contentToCopy;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
    }
  };

  return (
    <div className="transition ease-in-out delay-1000 shadow-white fixed inset-0 flex items-center justify-center z-10 ">
      <div className="bg-white drop-shadow-md modal-container p-2 w-80 h-52 border-black-500 border-2  flex-col gap-2  justify-between rounded-md items">
        <div >
          <button
            className=" text-black h-8 w-8 rounded-md ml-64 "
            onClick={onClose}
          >
            X
          </button>
        </div>

        <div className="mt-2  md:flex justify-between ">
          <i className={`${logo.class} w-32 text-black ci-2xl `}></i>
          <span className="w-48">
            {`<i class="${logo.class} ci-2x"></i>`}
            <button onClick={copyToClipboard} className="absolute mt-1">
              <DocumentDuplicateIcon className="h-4 w-4 hover:h-6 hover:w-6" />
            </button>
          </span>
        </div>

        <div className="flex justify-between items-center gap-6 ">
          <i
            className={`${logo.class}-${logoClass} ci-6x text-black ci-2xl`}
          ></i>
          <span className="w-48">
            {`<i class="${logo.class}-${logoClass} ci-6x"></i>`}
            <button onClick={copyToClipboard} className="absolute mt-1 mr-1">
              <DocumentDuplicateIcon className="h-4 w-4 hover:h-6 hover:w-6 " />
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default LogoModal;
