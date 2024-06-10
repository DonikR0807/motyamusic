import React from 'react';
import sad from '../../../shared/assets/images/sad.jpg';
import { Playlist } from '../types/Playlist';

interface PlayListInfoProps extends Playlist {
  children?: React.ReactNode;
}

export const PlayListInfo = ({ title, id, author, date, description, children }: PlayListInfoProps) => {
  return (
    <section className="flex items-center gap-6">
      <img
        src={sad}
        alt={title}
        className="h-[284px] w-[284px] rounded-3xl"
      ></img>
      <div className='grow'>
        <h1 className="font-quickSandBold mb-4 text-4xl text-lightSecondaryText dark:text-darkSecondaryText max-w-[305px] truncate">
          {title}
        </h1>
        <p className="font-quickSandRegular text-sm text-lightText dark:text-darkText">{description}</p>
        <div className="mt-6 flex gap-3">{children}</div>
      </div>
    </section>
  );
};
