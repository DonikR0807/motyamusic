import React from 'react';
import logo from '../../../shared/assets/images/logo.svg?url';
import { Search } from '../../../features/search';

export const Header = () => {
  return (
    <header className="pt-6 flex items-center justify-between">
      <img className="w-20 object-contain h-20 mr-10" src={logo} alt="logo"></img>
      <div>
        <Search></Search>
      </div>
    </header>
  );
};
