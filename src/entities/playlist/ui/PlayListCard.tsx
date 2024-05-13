import { Link } from 'react-router-dom';
import sad from '../../../shared/assets/images/sad.jpg';

export const PlayListCard = () => {
  return (
    <Link to={"/"}>
      <figure className='rounded-3xl card pb-4'>
        <img className="h-[213px] w-[234px] rounded-3xl object-cover" src={sad} alt="sad" />
        <figcaption className='mt-4 px-4'>
          <p className="mb-1 font-quicksandSemiBold text-2xl text-lightAltText dark:text-darkAltText">
            XXXtenctacion
          </p>
          <p className="font-quicksandRegular text-sm text-lightAltText/75 dark:text-darkText/25">
            author
          </p>
        </figcaption>
      </figure>
    </Link>
  );
};
