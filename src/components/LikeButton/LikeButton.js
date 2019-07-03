import React from 'react';
import LikesContext from '../../likes-context';
import styled from 'styled-components';

import Pin from '../../atoms/Pin';

const StyledButton = styled.button`
  background: rgba(0, 0, 0, .4);
  border: 0;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-family: sans-serif;
  font-size: 1rem;
  opacity: .8;
  padding: 8px 10px;
  padding-right: 28px;
  position: absolute;
  right: 5px;
  top: 5px;
  transition: opacity .3s linear, background-color .3s linear;

  &:hover {
    background-color: rgba(0, 0, 0, .9);
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
          return <StyledPin><Pin bg="#FFFFFF"/></StyledPin>;
        }

        return (
          <StyledButton
            onClick={() => setLike(product)}
          >
            save
            <StyledPin><Pin bg="#FFFFFF"/></StyledPin>
          </StyledButton>
        );
      }}
    </LikesContext.Consumer>
  );
};

export default LikeButton;
