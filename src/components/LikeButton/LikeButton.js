import React from 'react';
import LikesContext from '../../likes-context';

const LikeButton = ({ product }) => {
  return (
    <LikesContext.Consumer>
      {({ likes, likeIds, setLike }) => {
        const alreadyLiked = likeIds.indexOf(product.id) > -1;

        return (
          <button
            onClick={() => setLike(product)}
            disabled={alreadyLiked}
          >
            {alreadyLiked ? 'Liked' : 'Like'}
          </button>
        );
      }}
    </LikesContext.Consumer>
  );
};

export default LikeButton;
