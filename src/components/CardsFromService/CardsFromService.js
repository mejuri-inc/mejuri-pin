import React, { useEffect } from 'react';

import CardsGrid from '../CardsGrid/CardsGrid';

const apiBaseUrl = 'http://localhost:3000/categories/';

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

const CardsGridFromService = ({ data, dataType, setData = () => {} }) => {
  useEffect(() => {
    if (!data.length) {
      fetch(apiBaseUrl + dataType)
        .then(response => response.json())
        .then(response => setData(dataType, makeUnique(flatProducts(response), 'id')))
        .catch(er => console.log(er));
    }
  }, [ setData, dataType, data ]);

  return (
    <CardsGrid data={data} />
  );
};

export default CardsGridFromService;
