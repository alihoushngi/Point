import React from "react";
import { OurServicesListOne } from "./OurServicesListOne";
import { OurServicesListTwo } from "./OurServicesListTwo";
import { OurServicesListThree } from "./OurServicesListThree";

const OurServices = () => {
  return (
    <section className="max-w-[750px] m-auto my-14 w-full flex flex-col gap-3">
      <h2 className="capitalize text-md font-bold text-textColor text-center">
        our services
      </h2>
      <div className="flex flex-col gap-1 justify-center items-center">
        <span className="w-[6px] h-[6px] rounded-[9999px] bg-secondary"></span>
        <span className="w-[6px] h-[6px] rounded-[9999px] bg-secondary"></span>
        <span className="w-[6px] h-[6px] rounded-[9999px] bg-secondary"></span>
      </div>
      <h3 className="text-4xl font-medium text-center capitalize mt-3">
        this is how we can assist you
      </h3>
      <div className="flex justify-between items-center mt-4">
        <ul>
          {OurServicesListOne.map((item, index) => {
            return (
              <li
                key={index}
                className="text-xs font-light list-disc capitalize marker:text-secondary marker:align-bottom marker:text-[9px]"
              >
                {item}
              </li>
            );
          })}
        </ul>
        <ul>
          {OurServicesListTwo.map((item, index) => {
            return (
              <li
                key={index}
                className="text-xs font-light list-disc capitalize marker:text-secondary marker:align-bottom marker:text-[9px]"
              >
                {item}
              </li>
            );
          })}
        </ul>
        <ul>
          {OurServicesListThree.map((item, index) => {
            return (
              <li
                key={index}
                className="text-xs font-light list-disc capitalize marker:text-secondary marker:align-bottom marker:text-[9px]"
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default OurServices;
