import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledNav = styled.nav`
  height: 65px;
  width: 100%;
  `;

const FixedNav = styled.div`
  align-items: center;
  background: white;
  box-shadow: 0px 3px 5px 0px rgba(156,156,156,0.5);
  display: flex;
  height: 65px;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;

  a {
    border: 3px solid transparent;
    border-radius: 15px;
    color: #333;
    font-family: sans-serif;
    font-size: 1.5rem;
    padding: 5px 10px;
    margin: 0 10px;
    text-decoration: none;
    transition: border-color .3s linear;
  }

  a.active {
    border-color: lightgray;
  }
`;

const StyledNavigationLinks = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

const Navbar = ({ categories }) => {
  return (
    <StyledNav>
      <FixedNav>
        <StyledNavigationLinks>
          {categories.map(c =>
            <NavLink to={'/' + c.slug} activeClassName="active" key={c.slug}>
              {c.title}
            </NavLink>
          )}
          <NavLink to="/liked">Likes</NavLink>
        </StyledNavigationLinks>
      </FixedNav>
    </StyledNav>
  );
}

export default Navbar;
