import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'yellow',
  textDecoration: 'none',
  color: 'green',
}

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink
        to="/"
        exact
        style={link}
        activeStyle={{
          background: 'orange'
        }}
      >Home</NavLink>
      <NavLink
        to="/actors"
        exact
        style={link}
        activeStyle={{
          background: 'orange'
        }}
      >Actors</NavLink>
      <NavLink
        to="/directors"
        exact
        style={link}
        activeStyle={{
          background: 'orange'
        }}
      >Directors</NavLink>
      <NavLink
        to="/movies"
        exact
        style={link}
        activeStyle={{
          background: 'orange'
        }}
      >Movies</NavLink>
    </div>
  );
};

export default NavBar;


