import React from 'react';
import { PlayListCard } from 'src/entities/playlist';

export const PlayListsPage = () => {
  return (
    <section>
      <h2 className='sectionHeader'>Saved Playlists</h2>
      <ul className="flex flex-wrap gap-6">
        <li className='shrink-0'>
          <PlayListCard></PlayListCard>
        </li>
        <li className='shrink-0'>
          <PlayListCard></PlayListCard>
        </li>
        <li className='shrink-0'>
          <PlayListCard></PlayListCard>
        </li>
        <li className='shrink-0'>
          <PlayListCard></PlayListCard>
        </li>
        <li className='shrink-0'>
          <PlayListCard></PlayListCard>
        </li>
        <li className='shrink-0'>
          <PlayListCard></PlayListCard>
        </li>
        <li className='shrink-0'>
          <PlayListCard></PlayListCard>
        </li>
        <li className='shrink-0'>
          <PlayListCard></PlayListCard>
        </li>
        <li className='shrink-0'>
          <PlayListCard></PlayListCard>
        </li>
      </ul>
    </section>
  );
};
