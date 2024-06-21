import React from "react";
import { WhatsWeDoList } from "./WhatsWeDoList";

const WhatsWeDo = () => {
  return (
    <div className="w-full relative bg-primary z-50 border-t border-secondary p-6 max-w-[750px] m-auto mb-3 -mt-24 custom-box-shadow">
      <div className="flex flex-col justify-center items-center ">
        <h2 className="uppercase text-xl font-bold">what we do</h2>
        <span className="text-xs font-extralight">
          Full-services marketing communication solutions
        </span>
      </div>
      <div className="flex justify-between items-center max-w-[500px] m-auto mt-12">
        {WhatsWeDoList.map((item, index) => {
          return (
            <div
              key={index}
              className="w-[150px] h-[150px] flex justify-center items-center custom-circle-shadow border border-secondary rounded-[9999px] bg-primary text-xl text-center capitalize"
            >
              <h3>{item}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhatsWeDo;
