import React from 'react';
import { PlayListCard, PlayListSlide } from '../../../entities/playlist/';
import { SongCard } from '../../../widgets/song';

export const MainPage = () => {
  return (
    <div>
      <section className="flex gap-6">
        <div className="mt-12 grow self-start">
          <PlayListSlide></PlayListSlide>
        </div>
        <div className="grow">
          <h2 className="sectionHeader">Top releases</h2>
          <div className="flex flex-col gap-4">
            <SongCard></SongCard>
            <SongCard></SongCard>
            <SongCard></SongCard>
          </div>
        </div>
      </section>
      <section>
        <h2 className="sectionHeader">New releases</h2>
        <ul className="flex gap-4">
          <PlayListCard></PlayListCard>
          <PlayListCard></PlayListCard>
          <PlayListCard></PlayListCard>
          <PlayListCard></PlayListCard>
        </ul>
      </section>
    </div>
  );
};
