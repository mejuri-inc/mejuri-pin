import React, { useEffect } from 'react';

import CardsGroup from '../CardsGroup/CardsGroup';

const flatProducts = (response) => response.reduce((allProds, subGroup) => {
  return allProds.concat(subGroup.products);
}, [])

const CardsGroupFromService = ({ data, dataType, setData }) => {
  
  useEffect(() => {

    if (!data.length) {
      
      fetch('http://localhost:3000/categories/' + dataType)
        .then(response => response.json())
        .then(response => setData(flatProducts(response)));
      }
    }, []);
    

  return (
    <CardsGroup data={data} />
  );
};

export default CardsGroupFromService;
