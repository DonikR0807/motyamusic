import { Button } from 'src/shared/ui';
import PlayIcon from 'src/shared/assets/images/playIcon.svg?react';

export const PlayAllSongsBtn = () => {
  return (
    <Button variant="contained" text={"Play All"}icon={<PlayIcon width={24} height={24} className='fill-yellowPrimary'></PlayIcon>}>
      PlayAll
    </Button>
  );
};
