import React from 'react';
import LikesContext from '../../likes-context';
import styled from 'styled-components';

import Pin from '../../atoms/Pin';

const StyledButton = styled.button`
  background: lightgray;
  border: 0;
  border-bottom-left-radius: 5px;
  color: #333;
  cursor: pointer;
  font-family: monospace;
  font-size: 1.2rem;
  opacity: 0;
  padding: 8px 10px;
  padding-right: 38px;
  position: absolute;
  right: 0;
  text-transform: uppercase;
  top: 0;
  transition: opacity .3s linear,background-color .3s linear;

  &:hover {
    background-color: tomato;
  }

  span {
    opacity: 1;
    top: 0;
  }
  `;

  const StyledPin = styled.span`
    display: block;
    height: 20px;
    opacity: .3;
    padding: 5px;
    position: absolute;
    right: 0;
    width: 20px;
  `;

const LikeButton = ({ product }) => {
  if(!product) {
    return null;
  }

  return (
    <LikesContext.Consumer>
      {({ likeIds, setLike }) => {
        const alreadyLiked = likeIds.indexOf(product.id) > -1;

        if (alreadyLiked) {
          return <StyledPin><Pin bg="#000000"/></StyledPin>;
        }

        return (
          <StyledButton
            onClick={() => setLike(product)}
          >
            Save
            <StyledPin><Pin bg="#333333"/></StyledPin>
          </StyledButton>
        );
      }}
    </LikesContext.Consumer>
  );
};

export default LikeButton;
