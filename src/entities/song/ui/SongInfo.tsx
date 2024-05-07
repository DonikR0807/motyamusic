import React from 'react';
import sad from '../../../shared/assets/images/sad.jpg';

interface SongInfoProps {
  children?: React.ReactNode;
}

export const SongInfo = ({ children }: SongInfoProps) => {
  return (
    <div className="flex items-center justify-between rounded-xl bg-lightAlt p-6 dark:bg-darkAlt">
      <div className='flex items-center'>
        <img
          src={sad}
          alt="sad"
          className="mr-6 h-[63px] w-[63px] rounded-xl"
        ></img>
        <div>
          <p className="font-quickSandRegular mb-2 text-base text-lightText dark:text-darkText">
            Golden Age of 80
          </p>
          <span className="font-quickSandRegular mb-2 block text-xs text-lightText/25 dark:text-darkText/25">
            Author
          </span>
          <span className="font-quickSandRegular block text-xs text-lightText dark:text-darkText">
            15:00
          </span>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};
