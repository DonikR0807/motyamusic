import React from 'react';
import { Playlist } from '../types/Playlist';
import { formatDate } from '../../../shared/ui';

type PlayListInfoProps = {
  data: Playlist | undefined;
} & { children?: React.ReactNode };

export const PlayListInfo = ({ data, children }: PlayListInfoProps) => {
  if (!data) {
    return;
  }
  const { title, author, date, description, img } = data;
  return (
    <section className="flex items-start gap-6">
      <img
        src={img}
        alt={title}
        className="h-[284px] w-[284px] rounded-3xl"
      ></img>
      <div className="grow">
        <h1 className="font-quickSandBold mb-2 max-w-[500px] truncate text-4xl text-lightSecondaryText dark:text-darkSecondaryText">
          {title}
        </h1>
        <p className="font-quickSandBold mb-4 max-w-[305px] truncate text-xl text-lightSecondaryText dark:text-darkSecondaryText">
          {author}
        </p>
        <p className="font-quickSandRegular text-sm text-lightText dark:text-darkText mb-4">
          {description}
        </p>
        <p className='font-quickSandRegular text-sm text-lightSecondaryText dark:text-darkSecondaryText'>{formatDate(date.seconds)}</p>
        <div className="mt-6 flex gap-3">{children}</div>
      </div>
    </section>
  );
};
