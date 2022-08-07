import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../Assets/Logo.png';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Characters List',
    },
    {
      id: 2,
      path: '/favorites',
      text: 'Favorites',
    },
    {
      id: 3,
      path: '/nicknames',
      text: 'Nicknames',
    },
  ];

  return (
    <nav>
      <div className="rightNav">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <ul className="links">
        {links.map((link) => (
          <li key={link.id} className="linkLi">
            <NavLink
              to={link.path}
              className={(navData) => (navData.isActive ? 'active' : 'link')}
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
