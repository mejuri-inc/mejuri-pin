import React, { useState } from 'react';
import styled from 'styled-components';

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
  transition: margin-left .5s ease-in-out, background-color .4s linear;
  width: 100vw;
`;

const StyledBurger = styled.button`
  background: white;
  border: 2px solid #666;
  border-radius: 50%;
  cursor: pointer;
  height: 45px;
  left: 10px;
  position: fixed;
  top: 10px;
  width: 45px;
`;

const MobileMenu = ({ categories }) => {
  const [ state, setState ] = useState(false);

  return (
    <Styledmenu active={state}>
      <StyledBurger onClick={e => setState(!state)}>
        <Burger />
      </StyledBurger>
      {categories.map(c => <li key={c.title}>{c.title}</li>)}
    </Styledmenu>
  );
}

export default MobileMenu;
