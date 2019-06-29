import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import CardsGroup from './components/CardsGroup/CardsGroup';
import CardsGroupFromService from './components/CardsGroupFromService/CardsGroupFromService';
import MobileMenu from './components/MobileMenu/MobileMenu';

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
        <MobileMenu categories={categories} />
        <header className="App-header">
          {categories.map(category => {
            return <Link key={category.slug} to={'/' + category.slug}>{category.title}</Link>
          })}
          <Link to="/liked">Likes</Link>
        </header>
        <main>
          {categories.map(category => {
            return (
              <Route
                key={category.slug}
                path={'/' + category.slug}
                render={() => <CardsGroupFromService
                  dataType={category.slug}
                  data={data[category.slug]}
                  setData={(d) => { setData({ ...data, [category.slug]: d })}}
                />}
              />
            );
          })}
          <Route
            path="/liked"
            render={() => <CardsGroup data={likes} />}
          />
        </main>
      </LikesContext.Provider>
    </Router>
  );
}

export default App;
