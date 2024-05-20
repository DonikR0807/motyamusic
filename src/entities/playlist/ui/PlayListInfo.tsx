import React from 'react';
import sad from '../../../shared/assets/images/sad.jpg';

interface PlayListInfoProps {
  children?: React.ReactNode;
}

export const PlayListInfo = ({ children }: PlayListInfoProps) => {
  return (
    <section className="flex items-center gap-6">
      <img
        src={sad}
        alt="image"
        className="h-[284px] w-[284px] rounded-3xl"
      ></img>
      <div>
        <h1 className="font-quickSandBold mt-4 text-4xl text-altText">
          Tomorrow Tunes
        </h1>
        <p className="font-quickSandRegular text-sm text-lightText dark:text-darkText"></p>
        <div className="mt-6 flex gap-3">{children}</div>
      </div>
    </section>
  );
};
