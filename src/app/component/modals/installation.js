import { DocumentDuplicateIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";

function Install({onMouseLeave}) {
  const [copied, setCopied] = useState(false);
  const linkElement = `
    <link
      rel="stylesheet" href="https://cdn.
      jsdelivr.net/gh/dheereshagrwal
      /colored-icons@1.6.4/ci.min.css"/>
  `;

  const copyToClipboard = () => {
    const parentSpan = event.target.closest("div");
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
    <div onMouseLeave={onMouseLeave} className="  drop-shadow-md fixed ml-12 w-96 h-64 flex flex-col justify-between divide-y divide-gray-400 bg-white rounded-md border-2 border-black-500">
   
      <div className="ml-2 w-full h-36 p-4 flex flex-col">
        <div className="flex justify-between">
        <h1 className="font-semibold text-xl text-black ">Installation</h1>
        <img src="/images/installation.png "className="h-12 w-16 " alt=""></img>
         </div>  
      <p className="mt-4 text-gray-700">To use the Colored Icons Library, simply add the following CDN link to your HTML file:</p>
    </div>
  
    <div className="h-56 p-4 w-fit bg-gray ml-2">
        {linkElement}
        <button onClick={copyToClipboard} className="absolute mt-1 ml-4">
              <DocumentDuplicateIcon className="h-4 w-4 hover:h-6 hover:w-6" />
            </button>
    </div>
  
    </div>
  
  );
}
export default Install;
