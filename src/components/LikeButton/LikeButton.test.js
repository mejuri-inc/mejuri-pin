import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';

import Context from '../../likes-context';
import LikeButton from './LikeButton';

const mockProduct = {
  id: 1
}

describe('<LikeButton>', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LikeButton />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('shows as button if not already liked', () => {
    const { getByText } = render(
      <Context.Provider value={{
        likes: [{ id: 2 }, { id: 3 }],
        likeIds: [ 2, 3 ],
        setLike: () => {}
      }}>
        <LikeButton product={mockProduct} />
      </Context.Provider>
    );
    
    expect(getByText('Save')).toBeDefined();
  });
});
