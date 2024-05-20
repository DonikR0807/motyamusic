import React from 'react';
import { PlayListInfo } from '../../../entities/playlist';
import { AddToCollectionBtn } from '../../../features/addToCollection';
import { PlayAllSongsBtn } from '../../../features/playAllSongs';

export const PlayListSection = () => {
  return (
    <div>
      <PlayListInfo>
        <>
          <PlayAllSongsBtn></PlayAllSongsBtn>
          <AddToCollectionBtn></AddToCollectionBtn>
        </>
      </PlayListInfo>
    </div>
  );
};
