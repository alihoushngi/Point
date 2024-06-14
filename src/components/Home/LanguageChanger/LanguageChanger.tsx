import React from "react";

const LanguageChanger = () => {
  return (
    <div id="SwitcherButton" className="relative inline-block my-0 mx-1">
      <input
        type="checkbox"
        id="LanguageToggle"
        className="absolute ml-[-9999px] hidden"
      />
      <label htmlFor="LanguageToggle"></label>
      <span className="absolute uppercase text-[10px] top-[5px] pointer-events-none text-center left-0 pl-1 text-white en">
        En
      </span>
      <span className="absolute uppercase text-[10px] top-[5px] pointer-events-none text-center right-0 pr-1 text-white fa">
        Fa
      </span>
    </div>
  );
};

export default LanguageChanger;
