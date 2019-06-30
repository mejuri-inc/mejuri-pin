import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import CardsGrig from './components/CardsGrid/CardsGrid';
import CardsGrigFromService from './components/CardsFromService/CardsFromService';
import MobileMenu from './components/MobileMenu/MobileMenu';
import Navbar from './components/Navbar/Navbar';

import LikesContext from './likes-context';

const categories = [ 
  { title: 'Rings', slug: 'rings' },
  { title: 'Necklaces', slug: 'pendants' },
  { title: 'Earrings', slug: 'earrings' },
  { title: 'Bracelets + Anklets', slug: 'bracelets' }
];

function App() {

  const [ data, setData ] = useState({
    rings: [],
    pendants: [],
    earrings: [],
    bracelets: []
  });

  const [ likes, setLike ] = useState([]);
  const addLike = (like) => setLike(likes.concat(like));

  return (
    <Router>
      <LikesContext.Provider value={{ likes: likes, likeIds: likes.map(l => l.id), setLike: addLike }} >
        <Navbar categories={categories} /> 
        <MobileMenu categories={categories} />
        <main>
          {categories.map(category => 
            <Route
              key={category.slug}
              path={'/' + category.slug}
              render={() => <CardsGrigFromService
                dataType={category.slug}
                data={data[category.slug]}
                setData={(d) => { setData({ ...data, [category.slug]: d })}}
              />}
            />
          )}
          <Route
            path="/liked"
            render={() => <CardsGrig data={likes} />}
          />
        </main>
      </LikesContext.Provider>
    </Router>
  );
}

export default App;
