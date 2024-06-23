import LanguageChanger from "../../../Home/LanguageChanger/LanguageChanger";
import Logo from "../../../Home/Logo/Logo";
import Menu from "../../../Home/Menu/Menu";

const Navbar = () => {
  return (
    <nav className="px-28 py-1 flex justify-between items-center border-b-[1px] border-secondary max-w-[1200px] m-auto fixed top-0 left-0 right-0 bg-primary z-[200]">
      <Logo />
      <div className="flex items-center justify-between w-[9%]">
        <LanguageChanger />
        <Menu />
      </div>
    </nav>
  );
};

export default Navbar;
