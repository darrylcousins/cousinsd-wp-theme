import React from 'react';
import {
  NavLink,
} from 'react-router-dom';

const Nav = () => (
  <nav className="menu">
    <ul className="menu__list">
      <li className="menu__item">
        <NavLink
          exact
          className="menu__link"
          to="/"
        >
            Gallery
        </NavLink>
      </li>
      <li className="menu__item">
        <NavLink
          className="menu__link"
          to="/quotes"
        >
      Thoughts
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
