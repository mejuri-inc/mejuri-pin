import React from 'react';
import styled from 'styled-components';

const StyledArticle = styled.article`
  background-image: url('${props => props.bgImage}');
  background-position: center center;
  background-size: cover;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgba(156,156,156,0.3);
  max-width: 12rem;
  min-height: 15rem;
  overflow: hidden;
  position: relative;

  button {
    opacity: 1;
  }

  .externalLink {
    bottom: 5px;
    left: 5px;
    opacity: 1;
    position: absolute;
  }

  .arrow {
    margin: -6px;
    margin-right: 0px;
    transform: rotate(-45deg);
    width: 20px;
  }

  @media (min-width: 768px) {
    button, .externalLink {
      opacity: 0;

    }
    &:hover {
      button, .externalLink {
        opacity: .8;
      }
    }
  }
`;

const Card = ({ children, name, variant_images }) => {
  if(!variant_images || variant_images.length < 1) {
    return null;
  }

  return (
    <StyledArticle
      bgImage={variant_images[1].attachment_url_small}
      title={name}
    >
      {children}
    </StyledArticle>
  );
};

export default Card;
