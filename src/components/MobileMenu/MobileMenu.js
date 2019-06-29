import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Burger from '../../atoms/Burger';

const Styledmenu = styled.ul`
  background-color: ${props => props.active ? 'white' : 'rgba(255,255,255,0.4)'};
  color: #333;
  font-family: monospace;
  font-size: 18px;
  height: 100vh;
  line-height: 40px;
  list-style: none;
  margin: 0;
  margin-left: -100vw;
  margin-left: ${props => props.active ? '0' : '-100vw'};
  padding: 120px 0 0 10px;
  position: fixed;
  transition: margin-left .5s ease-in-out, background-color .2s linear;
  width: 100vw;

  a {
    color: #333;
    text-decoration: none;
  }
`;

const StyledBurger = styled.button`
  border: 0;
  cursor: pointer;
  height: 45px;
  left: 10px;
  position: fixed;
  top: 10px;
  width: 45px;
`;

const MobileMenu = ({ categories }) => {
  const [ state, setState ] = useState(false);

  const menuItems = categories.map(c =>
    <li key={c.title}>
      <Link onClick={() => setState(!state)} to={'/' + c.slug}>
        {c.title}
      </Link>
    </li>
  );

  return (
    <Styledmenu active={state}>
      <StyledBurger onClick={e => setState(!state)}>
        <Burger active={state} />
      </StyledBurger>
      {menuItems}
      <Link onClick={() => setState(!state)} to="/liked">Likes</Link>
    </Styledmenu>
  );
}

export default MobileMenu;
