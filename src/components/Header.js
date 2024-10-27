import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/logomskn.png'; // Ensure this path is correct

const Header = () => {
  return (
    <header className='py-6 mb-12 border-b'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* Logo */}
        <Link to='/'>
          <img src={Logo} alt='Logo' />
        </Link>
        {/* Button */}
        <div className='flex items-center gap-12'> 
          <Link className='hover:text-green-400 transition' to=''>Log-In</Link>
          <Link className='bg-green-300 hover:bg-green-100 text-white px-4 py-3 rounded-lg transition' to=''>Sign-Up</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;