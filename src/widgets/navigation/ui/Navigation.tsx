import { Link } from 'react-router-dom';
import HomeIcon from '../../../shared/assets/images/home.svg?react';
import PlaylistIcon from '../../../shared/assets/images/playlist.svg?react';
import LikeIcon from '../../../shared/assets/images/like.svg?react';
import UserIcon from '../../../shared/assets/images/user.svg?react';
import LogoutIcon from '../../../shared/assets/images/logout.svg?react';

export const Navigation = () => {
  return (
    <div className="bg-lightAlt box-border w-[100%] p-6 dark:bg-darkAlt rounded-full mt-12">
      <nav>
        <ul className="flex flex-col gap-6 items-center">
          <li>
            <Link to="/">
              <HomeIcon width={'32px'} height={'32px'} className='fill-lightAltText/25 dark:fill-darkAltText/25 transition-all hover:fill-yellowPrimary'></HomeIcon>
            </Link>
          </li>
          <li>
            <Link to="/playlists">
              <PlaylistIcon width={'32px'} height={'32px'} className='fill-lightAltText/25 dark:fill-darkAltText/25 transition-all hover:fill-yellowPrimary'></PlaylistIcon>
            </Link>
          </li>
          <li>
            <Link to="/likes">
              <LikeIcon width={'32px'} height={'32px'} className='fill-lightAltText/25 dark:fill-darkAltText/25 transition-all hover:fill-yellowPrimary'></LikeIcon>
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <UserIcon width={'32px'} height={'32px'} className='fill-lightAltText/25 dark:fill-darkAltText/25 transition-all hover:fill-yellowPrimary'></UserIcon>
            </Link>
          </li>
          <li>
            <Link to="/">
              <LogoutIcon width={'32px'} height={'32px'} className='fill-lightAltText/25 dark:fill-darkAltText/25 transition-all hover:fill-yellowPrimary'></LogoutIcon>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
