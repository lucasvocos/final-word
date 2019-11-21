import React from 'react';
import Seal from '../../Assets/seal.svg';
import './Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <img src={Seal} alt='Presidential Seal' className='seal'/>
      <h1>Aboard Air Force One</h1>
    </header>
  )
}

export default Header;
