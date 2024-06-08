import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gradient-to-r  from-blue-500 to-blue-800 p-4 shadow-2xl">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src='https://i.ibb.co/Bj5y9Lz/logo.png' 
            alt="Bingus Logo" 
            className="h-12 w-auto mr-3 hidden md:block" 
          />
          <h1 className="text-white text-xl md:text-3xl font-spaceMono font-bold">Jindo Inu</h1>
        </div>
        <nav className="flex flex-grow justify-end"> {/* Right align navigation */}
          <ul className="flex space-x-6">
            <li>
              <NavLink 
                to="/" 
                activeClassName="text-blue-500"
                className="text-white hover:text-blue-400 font-spaceMono"
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/links" 
                activeClassName="text-blue-500"
                className="text-white hover:text-blue-400 font-spaceMono"
              >
                Links
              </NavLink>
            </li> 
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
