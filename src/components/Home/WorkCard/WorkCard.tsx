import { ReactComponent } from "@/types/types";
import { IWorkCardTypes } from "./WorkCardTypes";
import Link from "next/link";
import Image from "next/image";

const WorkCard: ReactComponent<IWorkCardTypes> = (props) => {
  const { CardLink, WorkAlt, WorkCategory, WorkImage, WorkName } = props;
  return (
    <Link href={CardLink} className="mb-9">
      <Image
        src={WorkImage}
        alt={WorkAlt}
        width={300}
        height={300}
        className="mb-1"
      />
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-light">{WorkName}</h3>
        <span className="text-sm font-extralight px-4 py-[1px] bg-secondary">
          {WorkCategory}
        </span>
      </div>
      <div className="flex items-baseline gap-[2px]">
        <span className="flex rounded-[9999px] w-1 h-1 bg-secondary"></span>
        <span className="capitalize text-[10px] align-bottom p-0 m-0 text-secondary font-thin">
          about Project
        </span>
      </div>
    </Link>
  );
};

export default WorkCard;
