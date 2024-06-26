import { ReactComponent } from "@/types/types";
import { ILayoutTypes } from "./DesktopLayoutTypes";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const DesktopLayout: ReactComponent<ILayoutTypes> = (props) => {
  const { children } = props;
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default DesktopLayout;
