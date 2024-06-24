const Header = () => {
  return (
    <header className="flex flex-col justify-center items-center min-h-[calc(100vh-200px)] mt-20">
      <div className="relative top-0 left-0 right-0 box-border w-[300px] h-[300px] rounded-full flex justify-center items-center">
        <h1 className="text-center text-2xl font-bold">
          Take Your Business <br /> To The Next Level
        </h1>
        <div className="circle-wave1 absolute w-[200px] h-[200px] border border-secondary rounded-full"></div>
        <div className="circle-wave2 absolute w-[200px] h-[200px] border border-secondary rounded-full"></div>
        <div className="circle-wave3 absolute w-[200px] h-[200px] border border-secondary rounded-full"></div>
        <div className="circle-wave4 absolute w-[200px] h-[200px] border border-secondary rounded-full"></div>
        <div className="circle-wave5 absolute w-[200px] h-[200px] border border-secondary rounded-full"></div>
      </div>
    </header>
  );
};

export default Header;
