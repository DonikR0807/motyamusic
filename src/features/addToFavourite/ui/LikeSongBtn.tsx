import LikeIcon from '../../../shared/assets/images/like.svg?react';
import { Button } from '../../../shared/ui';

export const LikeSongBtn = () => {
  return (
    <Button
      variant="outlined"
      className="group hover:btn-primary"
      icon={
        <LikeIcon className="h-[14px] w-[14px] fill-lightText/50 group-hover:fill-yellowPrimary dark:fill-darkAltText/25"></LikeIcon>
      }
    ></Button>
  );
};
