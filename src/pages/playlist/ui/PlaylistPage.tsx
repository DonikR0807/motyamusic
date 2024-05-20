import React from 'react';
import { PlayListSection } from '../../../widgets/playlist/ui/PlayListSection';
import { SongList } from '../../../widgets/song/ui/SongList';

export const PlaylistPage = () => {
  return (
    <div>
      <div className='mb-8'>
        <PlayListSection></PlayListSection>
      </div>
      <SongList></SongList>
    </div>
  );
};
