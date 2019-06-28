import React from 'react';
import LikesContext from '../../likes-context';

const LikeButton = ({ product }) => {
  return (
    <LikesContext.Consumer>
      {({ setLike }) => 
        <button onClick={() => setLike(product)}>
          Like
        </button>
      }
    </LikesContext.Consumer>
  );
};

export default LikeButton;
