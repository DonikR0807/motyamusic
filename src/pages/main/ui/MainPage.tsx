import React from 'react';
import { PlayListSlide } from '../../../entities/playlist/';

export const MainPage = () => {
  return (
    <div className='flex'>
      <div className="grow rounded-[40px] bg-lightAlt dark:bg-darkAlt">
        <PlayListSlide></PlayListSlide>
      </div>
      <div className="grow"></div>
    </div>
  );
};
