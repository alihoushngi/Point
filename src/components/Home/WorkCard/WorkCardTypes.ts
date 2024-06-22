import { StaticImageData } from "next/image";

export interface IWorkCardTypes {
  CardLink: string;
  WorkImage: StaticImageData | string;
  WorkAlt: string;
  WorkName: string;
  WorkCategory: string;
}
