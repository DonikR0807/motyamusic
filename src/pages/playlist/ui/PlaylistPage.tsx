import React from 'react';
import { PlayListSection } from '../../../widgets/playlist/ui/PlayListSection';
import { SongsOfPlaylist } from '../../../widgets/song';

export const PlaylistPage = () => {
  return (
    <div>
      <div className="mb-8">
        <PlayListSection></PlayListSection>
      </div>
      <SongsOfPlaylist />
    </div>
  );
};
