import React, { useEffect } from 'react';

const flatProducts = (response) => response.reduce((allProds, subGroup) => {
  return allProds.concat(subGroup.products);
}, [])

const CardsGroup = ({ data, dataType, setData }) => {
  
  useEffect(() => {

    if (!data.length) {
      
      fetch('http://localhost:3000/categories/' + dataType)
        .then(response => response.json())
        .then(response => setData(flatProducts(response)));
      }
    }, []);
    

  return (
    <ul>
      {data.map(product => <li key={product.id}>[{product.id}]{product.accurate_name}</li>)}
    </ul>
  );
};

export default CardsGroup;
