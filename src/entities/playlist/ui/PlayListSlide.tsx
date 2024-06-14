import { Link } from 'react-router-dom';
import { Playlist } from '../types/Playlist';
import { formatDate } from 'src/shared/ui';

export const PlayListSlide = ({
  img,
  title,
  description,
  id,
  date,
  author,
}: Playlist) => {
  return (
    <Link to={`/playlist/${id}`}>
      <div className="card flex h-[100%] w-[100%] items-center rounded-[40px]">
        <div className="relative ml-6 grow">
          <h3 className="font-quickSandBold mb-4 max-w-[400px] truncate text-4xl dark:text-altText text-lightSecondaryText dark:text-darkSecondaryText">
            {title}
          </h3>
          <p className="font-quickSandRegular text-xl mb-6 max-w-[400px] truncate text-lightSecondaryText dark:text-darkSecondaryText">
            {author}
          </p>
          <p className="font-quickSandRegular text-md mb-4 h-[140px] max-w-[400px] overflow-hidden text-lightText dark:text-darkText">
            {description}
          </p>
          <p className="font-quickSandRegular text-sm dark:text-altText text-lightSecondaryText dark:text-darkSecondaryText">
            Date: 
            {" " + formatDate(date.seconds)}
          </p>
        </div>
        <img
          src={img}
          alt={title}
          className="h-[380px] w-[380px] rounded-[40px] object-cover"
        ></img>
      </div>
    </Link>
  );
};
