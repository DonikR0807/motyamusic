import React from 'react';
import { Playlist } from '../types/Playlist';
import { formatDate } from 'src/shared/ui';
import Skeleton from 'react-loading-skeleton';

type PlayListInfoProps = {
  data: Playlist | undefined;
  isLoading?: boolean;
  children?: React.ReactNode;
};

export const PlayListInfo = ({
  data,
  children,
  isLoading = false,
}: PlayListInfoProps) => {
  return (
    <section className="flex items-start gap-6">
      {isLoading ? (
        <Skeleton
          width={284}
          height={284}
          style={{ borderRadius: 24 }}
        ></Skeleton>
      ) : (
        <img
          width={284}
          height={284}
          src={data?.img}
          alt={data?.title}
          className="h-[284px] w-[284px] rounded-3xl"
        ></img>
      )}
      <div className="grow">
        <h1 className="font-quickSandBold mb-2 max-w-[500px] truncate text-4xl text-lightSecondaryText dark:text-darkSecondaryText">
          {isLoading ? <Skeleton></Skeleton> : data?.title}
        </h1>
        <p className="font-quickSandBold mb-4 max-w-[305px] truncate text-xl text-lightSecondaryText dark:text-darkSecondaryText">
          {isLoading ? <Skeleton></Skeleton> : data?.author}
        </p>
        <p className="font-quickSandRegular mb-4 text-sm text-lightText dark:text-darkText">
          {isLoading ? <Skeleton count={8}></Skeleton> : data?.description}
        </p>
        <p className="font-quickSandRegular text-sm text-lightSecondaryText dark:text-darkSecondaryText">
          {isLoading ? <Skeleton></Skeleton> : formatDate(data?.date.seconds as number)}
        </p>
        {!isLoading && <div className="mt-6 flex gap-3">{children}</div>}
      </div>
    </section>
  );
};
