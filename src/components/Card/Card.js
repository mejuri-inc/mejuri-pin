import React from 'react';
import styled from 'styled-components';

const StyledArticle = styled.article`
  background-image: url('${props => props.bgImage}');
  background-position: center center;
  background-size: cover;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgba(156,156,156,0.3);
  cursor: pointer;
  min-height: 15rem;
`;

const Card = ({ children, id, name, variant_images }) => {

  return (
    <StyledArticle bgImage={variant_images[0].attachment_url_small}>
      {children}
    </StyledArticle>
  );
};

export default Card;
