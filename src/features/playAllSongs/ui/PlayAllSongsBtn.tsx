import React from 'react';
import { Button } from '../../../shared/ui';
import PlayIcon from '../../../shared/assets/images/playIcon.svg?react';

export const PlayAllSongsBtn = () => {
  return (
    <Button variant="contained" text={"Play All"}icon={<PlayIcon width={24} height={24} className='fill-yellowPrimary'></PlayIcon>}>
      PlayAll
    </Button>
  );
};
