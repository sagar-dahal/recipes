import React, { forwardRef } from 'react';

import '../styles/card.css';

const Card = forwardRef(({name, thumbnail_url, description}, ref) => {
  const body = (
      <div className='container'>
        <div className='front'>
          <img src={thumbnail_url} alt="herau" />
          <div className='recipe-name'>
              <h1>{name}</h1>
          </div>
        </div>
        <div className='back'>
          <p>{description}</p>
        </div>
      </div>
  )
  const entireCard = ref
    ? <div ref={ref} className='card-container'>{body}</div>
    : <div className='card-container'>{body}</div>
  
    return entireCard;
});

export default Card
