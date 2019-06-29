import React from 'react';
import styled from 'styled-components';

import Card from '../Card/Card';
import LikeButton from '../LikeButton/LikeButton';

const StyledSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 1.25rem;;
  max-width: 1024px;
  margin: auto;
  padding: 3rem 1.25rem;
`;

const CardsGrid = ({ data }) => {
  return (
    <StyledSection>
      {data.map(product => <Card
        {...product}
        key={product.id}>
          <LikeButton product={product} />
      </Card>)}
    </StyledSection>
  );
};

export default CardsGrid;
