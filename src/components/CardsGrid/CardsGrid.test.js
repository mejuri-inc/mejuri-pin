import React from 'react';
import ReactDOM from 'react-dom';
import CardsGroup from './CardsGrid';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CardsGroup />, div);
  ReactDOM.unmountComponentAtNode(div);
});
