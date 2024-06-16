import React from 'react';
import { Song } from '../types/Song';
import { formatDuration } from 'src/shared/ui';
import Skeleton from 'react-loading-skeleton';

interface SongInfoProps {
  data: Song | undefined;
  children?: React.ReactNode;
  isLoading?: boolean;
}

export const SongInfo = ({ data, children, isLoading }: SongInfoProps) => {
  return (
    <div className="card flex items-center justify-between rounded-xl p-6">
      <div className="flex items-center">
        {isLoading ? (
          <Skeleton
            width={63}
            height={63}
            style={{ borderRadius: 12, marginRight: 24 }}
          ></Skeleton>
        ) : (
          <img
            width={63}
            height={63}
            src={data?.img}
            alt={data?.title}
            className="mr-6 h-[63px] w-[63px] rounded-xl object-cover"
          ></img>
        )}
        <div>
          <p className="font-quickSandRegular mb-2 text-base text-lightText dark:text-darkText">
            {isLoading ? <Skeleton width={400}></Skeleton> : data?.title}
          </p>
          <span className="font-quickSandRegular mb-2 block text-xs text-lightSecondaryText dark:text-darkSecondaryText">
            {isLoading ? <Skeleton width={400}></Skeleton> : data?.author}
          </span>
          <span className="font-quickSandRegular block text-xs text-lightText dark:text-darkText">
            {isLoading ? (
              <Skeleton width={400}></Skeleton>
            ) : (
              formatDuration(data?.duration as number)
            )}
          </span>
        </div>
      </div>
      {!isLoading && <div>{children}</div>}
    </div>
  );
};
