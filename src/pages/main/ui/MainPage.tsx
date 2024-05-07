import React from 'react';
import { PlayListSlide } from '../../../entities/playlist/';
import { SongCard } from '../../../widgets/song';

export const MainPage = () => {
  return (
    <div className="flex gap-6">
      <div className="grow self-start rounded-[40px] bg-lightAlt dark:bg-darkAlt">
        <PlayListSlide></PlayListSlide>
      </div>
      <div className="grow">
        <h2 className="mb-4 font-quicksandBold text-2xl text-lightText dark:text-darkText">
          Top releases
        </h2>
        <div className="flex flex-col gap-4">
          <SongCard></SongCard>
          <SongCard></SongCard>
          <SongCard></SongCard>
        </div>
      </div>
    </div>
  );
};
