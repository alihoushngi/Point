const Timeline = () => {
  return (
    <div className="timeline flex mt-14">
      <div className="w-[130px] h-[130px] rounded-[9999px] border-2 border-secondary mt-[0.4rem] relative left-[4px]">
        <div className="bg-primary absolute w-[125px] h-[130px] rounded-[9999px] -left-[1px] top-[0.75rem]"></div>
        <div className="flex flex-col justify-center items-center absolute left-[20%] bottom-[96%]">
          <h4 className="capitalize font-thin">understand</h4>
          <span className="w-3 h-3 bg-secondary rounded-[9999px] block"></span>
        </div>
      </div>
      <div className="w-[130px] h-[130px] rounded-[9999px] border-2 border-secondary mb-2 relative left-[2px]">
        <div className="bg-primary absolute w-[125px] h-[130px] rounded-[9999px] -left-[1px] bottom-3"></div>
        <div className="flex flex-col justify-center items-center absolute left-[25%] top-[96%]">
          <span className="w-3 h-3 bg-secondary rounded-[9999px] block"></span>
          <h4 className="capitalize font-thin">research</h4>
        </div>
      </div>
      <div className="w-[130px] h-[130px] rounded-[9999px] border-2 border-secondary mt-[0.4rem] relative">
        <div className="bg-primary absolute w-[125px] h-[130px] rounded-[9999px] -left-[1px] top-[0.75rem]"></div>
        <div className="flex flex-col justify-center items-center absolute left-[30%] bottom-[96%]">
          <h4 className="capitalize font-thin">analyze</h4>
          <span className="w-3 h-3 bg-secondary rounded-[9999px] block"></span>
        </div>
      </div>
      <div className="w-[130px] h-[130px] rounded-[9999px] border-2 border-secondary mb-2 relative right-[2px]">
        <div className="bg-primary absolute w-[125px] h-[130px] rounded-[9999px] -left-[1px] bottom-3"></div>
        <div className="flex flex-col justify-center items-center absolute left-[35%] top-[96%]">
          <span className="w-3 h-3 bg-secondary rounded-[9999px] block"></span>
          <h4 className="capitalize font-thin">design</h4>
        </div>
      </div>
      <div className="w-[130px] h-[130px] rounded-[9999px] border-2 border-secondary mt-[0.4rem] relative right-[4px]">
        <div className="bg-primary absolute w-[125px] h-[130px] rounded-[9999px] -left-[1px] top-[0.75rem]"></div>
        <div className="flex flex-col justify-center items-center absolute left-[40%] bottom-[96%]">
          <h4 className="capitalize font-thin">test</h4>
          <span className="w-3 h-3 bg-secondary rounded-[9999px] block"></span>
        </div>
      </div>
      <div className="w-[130px] h-[130px] rounded-[9999px] border-2 border-secondary mb-2 relative right-[6px]">
        <div className="bg-primary absolute w-[125px] h-[130px] rounded-[9999px] -left-[1px] bottom-3"></div>
        <div className="flex flex-col justify-center items-center absolute left-[35%] top-[96%]">
          <span className="w-3 h-3 bg-secondary rounded-[9999px] block"></span>
          <h4 className="capitalize font-thin">present</h4>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
