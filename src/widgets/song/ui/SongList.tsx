import React from 'react';
import { SongCard } from './SongCard';

export const SongList = () => {
  return (
    <ul className='flex flex-col gap-5'>
      <li>
        <SongCard></SongCard>
      </li>
      <li>
        <SongCard></SongCard>
      </li>
      <li>
        <SongCard></SongCard>
      </li>
      <li>
        <SongCard></SongCard>
      </li>
      <li>
        <SongCard></SongCard>
      </li>
      <li>
        <SongCard></SongCard>
      </li>
      <li>
        <SongCard></SongCard>
      </li>
    </ul>
  );
};
