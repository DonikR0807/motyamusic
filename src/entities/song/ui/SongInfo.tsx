import React from 'react';
import { Song } from '../types/Song';
import { formatDuration } from '../../../shared/ui';

interface SongInfoProps extends Song {
  children?: React.ReactNode;
}

export const SongInfo = ({
  children,
  img,
  title,
  author,
  duration,
}: SongInfoProps) => {
  return (
    <div className="card flex items-center justify-between rounded-xl p-6">
      <div className="flex items-center">
        <img
          src={img}
          alt={title}
          className="mr-6 h-[63px] w-[63px] rounded-xl object-cover"
        ></img>
        <div>
          <p className="font-quickSandRegular mb-2 text-base text-lightText dark:text-darkText">
            {title}
          </p>
          <span className="font-quickSandRegular mb-2 block text-xs text-lightSecondaryText dark:text-darkSecondaryText">
            {author}
          </span>
          <span className="font-quickSandRegular block text-xs text-lightText dark:text-darkText">
            {formatDuration(duration)}
          </span>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};
