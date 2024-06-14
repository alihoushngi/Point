import LanguageChanger from "../Home/LanguageChanger/LanguageChanger";
import Logo from "../Home/Logo/Logo";
import Menu from "../Home/Menu/Menu";

const Header = () => {
  return (
    <header className="px-28 py-1 flex justify-between items-center border-b-[1px] border-secondary max-w-[1200px] m-auto">
      <Logo />
      <div className="flex items-center justify-between w-[9%]">
        <LanguageChanger />
        <Menu />
      </div>
    </header>
  );
};

export default Header;
