import React from 'react';
import logo from 'src/shared/assets/images/logo.svg?url';
import { Search } from 'src/features/search';
import { ThemeToggle } from 'src/features/toggleTheme';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="flex items-center justify-between pt-6">
      <Link to={"/"} className='mr-10'>
        <img
          className="h-[52px] w-[52px] object-contain"
          src={logo}
          alt="logo"
        ></img>
      </Link>
      <div className="flex items-center gap-2">
        <ThemeToggle></ThemeToggle>
        <Search></Search>
      </div>
    </header>
  );
};
