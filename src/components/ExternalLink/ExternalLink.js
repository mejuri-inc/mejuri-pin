import React from 'react';
import styled from 'styled-components';

const StyledHref = styled.a`
  background: rgba(0, 0, 0, .4);
  border-radius: 5px;
  color: white;
  display: inline-block;
  padding: 7px 10px;
  text-decoration: none;
  transition: opacity .3s linear, background-color .3s linear;

  &:hover {
    background-color: rgba(0, 0, 0, .9);
  }
`;

const ExternalLink = ({ children, to }) => <StyledHref className="externalLink" target="_blank" href={to}>{children}</StyledHref>;

export default ExternalLink;
