import { Link } from 'react-router-dom';
import { Playlist } from '../types/Playlist';
import { formatDate } from 'src/shared/ui';
import Skeleton from 'react-loading-skeleton';

interface PlaylistSldeProps extends Partial<Playlist> {
  isLoading?: boolean;
}

export const PlayListSlide = ({
  img,
  title,
  description,
  id,
  date,
  author,
  isLoading = false,
}: PlaylistSldeProps) => {
  return (
    <Link to={isLoading ? `/` : `/playlist/${id}`}>
      <div className="card flex h-[100%] w-[100%] items-center rounded-[40px]">
        <div className="relative ml-6 grow">
          <h3 className="font-quickSandBold dark:text-altText mb-4 max-w-[400px] truncate text-4xl text-lightSecondaryText dark:text-darkSecondaryText">
            {isLoading ? <Skeleton></Skeleton> : title}
          </h3>
          <p className="font-quickSandRegular mb-6 max-w-[400px] truncate text-xl text-lightSecondaryText dark:text-darkSecondaryText">
            {isLoading ? <Skeleton></Skeleton> : author}
          </p>
          <p className="font-quickSandRegular text-md mb-4 h-[140px] max-w-[400px] overflow-hidden text-lightText dark:text-darkText">
            {isLoading ? <Skeleton></Skeleton> : description}
          </p>
          <p className="font-quickSandRegular dark:text-altText max-w-[400px] text-sm text-lightSecondaryText dark:text-darkSecondaryText">
            {isLoading ? (
              <Skeleton></Skeleton>
            ) : (
              'Date:' + ' ' + formatDate(date?.seconds as number)
            )}
          </p>
        </div>
        {isLoading ? (
          <Skeleton
            width={380}
            height={380}
            style={{
              borderRadius: 40,
            }}
          ></Skeleton>
        ) : (
          <img
            src={img}
            alt={title}
            className="h-[380px] w-[380px] rounded-[40px] object-cover"
          ></img>
        )}
      </div>
    </Link>
  );
};
