import React from 'react';
import logo from '../../../shared/assets/images/logo.svg?url';
import { Search } from '../../../features/search';
import { ThemeToggle } from '../../../features/toggleTheme';

export const Header = () => {
  return (
    <header className="pt-6 flex items-center justify-between">
      <img className="w-[52px] object-contain h-[52px] mr-10" src={logo} alt="logo"></img>
      <div className='flex items-center gap-2'>
        <ThemeToggle></ThemeToggle>
        <Search></Search>
      </div>
    </header>
  );
};
