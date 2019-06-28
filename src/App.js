import React, { useState } from 'react';
import './App.css';

import CardsGroup from './components/CardsGroup/CardsGroup';

const categories = [ 
  { title: 'Rings', slug: 'rings' },
  { title: 'Necklaces', slug: 'necklaces' },
  { title: 'Earrings', slug: 'earrings' },
  { title: 'Bracelets + Anklets', slug: 'bracelets' }
]

function App() {
  const [ rings, setRings ] = useState([]);
  const [ necklaces, setNecklaces ] = useState([]);
  const [ earrings, setEarrings ] = useState([]);
  const [ bracelets, setBracelets ] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        navbar
      </header>
      <main>
        <CardsGroup dataType="rings" data={rings} setData={setRings} />
      </main>
    </div>
  );
}

export default App;
