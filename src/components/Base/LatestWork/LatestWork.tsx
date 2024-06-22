import WorkCard from "@/components/Home/WorkCard/WorkCard";
import React from "react";
import { LatestWorkItems } from "./LatestWorkItems";

const LatestWork = () => {
  return (
    <div className="w-full border border-secondary rounded-[9999px] flex flex-col justify-center items-center gap-4 p-16">
      <div className="flex gap-1 justify-center items-center m-8">
        <span className="w-[6px] h-[6px] rounded-[9999px] bg-secondary"></span>
        <span className="w-[6px] h-[6px] rounded-[9999px] bg-secondary"></span>
        <span className="w-[6px] h-[6px] rounded-[9999px] bg-secondary"></span>
      </div>
      <h2 className="capitalize text-md font-bold text-textColor text-center">
        latest work.
      </h2>
      <div className="flex flex-wrap justify-center items-center w-1/2 my-32">
        {LatestWorkItems.map((item, index) => {
          return (
            <div key={index} className="w-1/2 flex justify-center items-center">
              <WorkCard
                CardLink={item.itemLink}
                WorkImage={item.imageUrl}
                WorkAlt={item.imageAlt}
                WorkName={item.itemName}
                WorkCategory={item.itemLabel}
              />
            </div>
          );
        })}
      </div>
      <div className="flex flex-col gap-1 justify-center items-center m-8">
        <span className="w-[6px] h-[6px] rounded-[9999px] bg-secondary"></span>
        <span className="w-[6px] h-[6px] rounded-[9999px] bg-secondary"></span>
        <span className="w-[6px] h-[6px] rounded-[9999px] bg-secondary"></span>
      </div>
      <div className="w-12 h-12 rounded-[9999px] bg-secondary flex justify-center items-center">
        <span className="text-[10px] text-center text-wrap">
          see all product
        </span>
      </div>
    </div>
  );
};

export default LatestWork;
