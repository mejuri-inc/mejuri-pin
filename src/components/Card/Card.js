import React from 'react';

const Card = ({ children, id, name }) => {
    return (
        <article style={{ border: '2px solid tomato' }}>
            {name}
            {children}
        </article>
    );
};

export default Card;
