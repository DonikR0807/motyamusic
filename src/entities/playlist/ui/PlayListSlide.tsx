import sad from '../../../shared/assets/images/sad.jpg';

export const PlayListSlide = () => {
  return (
    <div className={`flex h-[100%] w-[100%] items-center`}>
      <div className="relative ml-6 grow">
        <h3 className="font-quickSandBold mb-2 text-4xl text-lightText dark:text-darkText">R & B Hits</h3>
        <p className="font-quickSandRegular h-[76px] max-w-[276px] overflow-hidden text-sm text-lightText dark:text-darkText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
          pariatur provident et sapiente sequi laudantium tenetur quidem. Ab
          modi repellendus nam ratione, impedit dolore nihil a maiores aliquid.
          Expedita, eos. 
        </p>
      </div>
      <img src={sad} alt="sad" className="h-[380px] w-[380px] rounded-[40px]"></img>
    </div>
  );
};
