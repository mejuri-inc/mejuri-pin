import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

import CardsGroup from './components/CardsGroup/CardsGroup';

const categories = [ 
  { title: 'Rings', slug: 'rings' },
  { title: 'Necklaces', slug: 'pendants' },
  { title: 'Earrings', slug: 'earrings' },
  { title: 'Bracelets + Anklets', slug: 'bracelets' }
]

function App() {

  const [ data, setData ] = useState({
    rings: [],
    pendants: [],
    earrings: [],
    bracelets: []
  });

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {categories.map(category => {
            return <Link to={category.slug}>{category.title}</Link>
          })}
        </header>
        <main>
          {categories.map(category => {
            return (
              <Route
                path={'/' + category.slug}
                render={() => <CardsGroup
                  dataType={category.slug}
                  data={data[category.slug]}
                  setData={(d) => { console.log('dddd', data); setData({ ...data, [category.slug]: d })}}
                />}
              />
            );
          })}
        </main>
      </div>
    </Router>
  );
}

export default App;
