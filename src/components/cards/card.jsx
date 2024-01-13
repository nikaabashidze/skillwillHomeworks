


import React from 'react';
import './card.css';

const Card = (props) => {
  return (
    <div>
      <div className='card'>

        <div className='imgbox'>
      <img src={props.image} alt={props.name} />
      </div>
        <h1>{props.name}</h1>
        <p>{props.description}</p>

        {Array.isArray(props.characters) && (
          <div>Characters: {props.characters.join(', ')}</div>
        )}

      <button className='button' onClick={props.onButtonClick}>Button </button>
      </div>
    </div>
  );
};

export default Card;