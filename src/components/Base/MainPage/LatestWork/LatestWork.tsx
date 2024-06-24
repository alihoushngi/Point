import WorkCard from "@/components/Home/WorkCard/WorkCard";
import { LatestWorkItems } from "./LatestWorkItems";

const LatestWork = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center gap-2 max-w-[1300px]">
      <div className="flex gap-1 justify-center items-center m-8 mt-40">
        <span className="w-[6px] h-[6px] rounded-[9999px] bg-secondary"></span>
        <span className="w-[6px] h-[6px] rounded-[9999px] bg-secondary"></span>
        <span className="w-[6px] h-[6px] rounded-[9999px] bg-secondary"></span>
      </div>
      <h2 className="capitalize text-md font-bold text-textColor text-center">
        latest work.
      </h2>
      <div className="flex flex-wrap justify-center items-center w-1/2 mt-32">
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
      <div className="flex flex-col gap-1 justify-center items-center mb-8">
        <span className="w-[6px] h-[6px] rounded-[9999px] bg-secondary"></span>
        <span className="w-[6px] h-[6px] rounded-[9999px] bg-secondary"></span>
        <span className="w-[6px] h-[6px] rounded-[9999px] bg-secondary"></span>
      </div>
      <div className="w-12 h-12 rounded-[9999px] bg-secondary flex justify-center items-center custom-circle-shadow">
        <span className="text-[9px] text-center text-wrap capitalize">
          see all product
        </span>
      </div>
    </section>
  );
};

export default LatestWork;
