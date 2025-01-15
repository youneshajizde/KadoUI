import { ChevronRight } from "lucide-react";
import React, { useState } from "react";
import { CompPreview } from "./CompPreview";
import { CompCode } from "./CompCode";

export const Components = () => {
  const [selected, setSelected] = useState("Preview");
  const tabs = ["Code", "Preview"];

  return (
    <div>
      <span className="flex items-center space-x-2">
        <h1 className="text-sm text-gray-500">components</h1>
        <ChevronRight size={13} />
        <h1 className="text-sm">Accordion</h1>
      </span>
      <h1 className="text-3xl font-medium mt-5">Accordion</h1>
      <ul className="flex items-center space-x-10 mt-5">
        {tabs.map((tab, index) => (
          <li
            key={index}
            onClick={() => setSelected(tab)}
            className={`cursor-pointer ${
              selected === tab ? "text-black font-medium" : "text-gray-400"
            }`}
          >
            {tab}
          </li>
        ))}
      </ul>

      {/* Conditional Rendering */}
      {selected === "Preview" ? (
        <CompPreview />
      ) : selected === "Code" ? (
        <CompCode />
      ) : (
        <CompPreview />
      )}
    </div>
  );
};
