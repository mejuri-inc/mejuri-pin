import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: inline-block;
  height: 40px;
  position: relative;
  width: 40px;
`;

const Line = styled.div`
  top: 18px;

  &, &:after, &:before {
    background-color: #333;
    border-radius: 4px;
    height: 4px;
    position: absolute;
    transition-timing-function: ease;
    transition-duration: .15s;
    transition-property: transform;
    width: 40px;
  }

  &:before {
    top: -10px;
    transform: ${props => props.active ? 'translate3d(-11px,3px,0) rotate(-45deg) scaleX(.5)' : 'none'}
  }

  &:after {
    bottom: -10px;
    transform: ${props => props.active ? 'translate3d(-11px,-3px,0) rotate(45deg) scaleX(.5)' : 'none'};
}

  &:after, &:before {
    background-color: #333;
    border-radius: 4px;
    content: "";
    display: block;
    height: 4px;
    position: absolute;
    width: 40px;
  }
`;

const Burger = ({ active }) => (
    <Wrapper>
      <Line active={active} />
    </Wrapper>
);

export default Burger;
