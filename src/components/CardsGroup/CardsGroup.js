import React from 'react';

import Card from '../Card/Card';
import LikeButton from '../LikeButton/LikeButton';

const CardsGroup = ({ data }) => {
  return (
    <section>
      {data.map(product => <Card
        {...product}
        key={product.id}>
          <LikeButton product={product} />
      </Card>)}
    </section>
  );
};

export default CardsGroup;
