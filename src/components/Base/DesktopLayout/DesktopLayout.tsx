import Navbar from "../Navbar/Navbar";
import { ReactComponent } from "@/types/types";
import { ILayoutTypes } from "./DesktopLayoutTypes";

const DesktopLayout: ReactComponent<ILayoutTypes> = (props) => {
  const { children } = props;
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default DesktopLayout;
