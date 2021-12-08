import React from 'react';
import logo from '../logo.svg';

const Header = () => {
  return (
    <header>
      <div className='container'>
        <img src={logo} className='logo' alt='logo' />
      </div>
    </header>
  );
};

export default Header;
