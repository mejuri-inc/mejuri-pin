import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
  height: 65px;
  width: 100%;
  `;

const FixedNav = styled.div`
  background: white;
  box-shadow: 0px 3px 5px 0px rgba(156,156,156,0.5);
  height: 65px;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
`;

const Navbar = () => {
  return (
    <StyledNav>
      <FixedNav />
    </StyledNav>
  );
}

export default Navbar;
