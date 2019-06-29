import React, { useEffect } from 'react';

import CardsGrid from '../CardsGrid/CardsGrid';

const flatProducts = response => response.reduce((allProds, subGroup) => {
  return allProds.concat(subGroup.products);
}, []);

const makeUnique = (arr, comp) => {
  const unique = arr
    .map(e => e[comp])
    .map((e, i, final) => final.indexOf(e) === i && i)
    .filter(e => arr[e]).map(e => arr[e]);

   return unique;
}

const CardsGridFromService = ({ data, dataType, setData }) => {
  useEffect(() => {
    if (!data.length) {
      fetch('http://localhost:3000/categories/' + dataType)
        .then(response => response.json())
        .then(response => setData(makeUnique(flatProducts(response), 'id')));
      }
    }, []);

  return (
    <CardsGrid data={data} />
  );
};

export default CardsGridFromService;
