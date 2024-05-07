import React from 'react';
import LikeIcon from '../../../shared/assets/images/like.svg?react';

export const LikeSongBtn = () => {
  return (
    <button
      className="group light:border-lightText/25 flex h-[37px] w-[37px] 
    items-center 
    justify-center 
    rounded-full border-[1px] border-lightText dark:border-darkText/25 hover:btn-primary"
    >
      <LikeIcon className="fill-lightAltText dark:fill-darkAltText/25 group-hover:fill-yellowPrimary w-[14px] h-[14px]"></LikeIcon>
    </button>
  );
};
