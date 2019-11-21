import React from 'react';
import Logo from '../../Assets/finalwordlogo.png';
import './Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <img src={Logo} alt='Presidential Seal' className='seal'/>
    </header>
  )
}

export default Header;
