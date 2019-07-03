import React from 'react';
import styled from 'styled-components';

import Arrow from '../../atoms/Arrow';
import Card from '../Card/Card';
import IsOnScreen from '../IsOnScreen/IsOnScreen';
import LikeButton from '../LikeButton/LikeButton';
import ExternalLink from '../ExternalLink/ExternalLink';

const StyledSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  grid-gap: 1.25rem;
  max-width: 1024px;
  margin: auto;
  padding: 3rem 1.25rem;
`;

const CardsGrid = ({ data }) => {
  if (!data) {
    return null;
  }
console.log('daa', data);
  return (
    <StyledSection>
      {data.map(product =>
        <IsOnScreen minHeight="15rem" key={product.id}>
          <Card {...product}>
            <LikeButton product={product} />
            <ExternalLink to={`https://mejuri.com/shop/products/${product.slug}`}>
              <Arrow fill="#FFFFFF" />mejuri.com
            </ExternalLink>
          </Card>
        </IsOnScreen>
      )}
      {data.length < 4 ? Array(3).fill(true).map((e, i) => <div key={i} />) : null}
    </StyledSection>
  );
};

export default CardsGrid;
