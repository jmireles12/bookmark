import React from 'react';
import './Bookmark.css';

import Rating from '../Rating/Rating';

export default function Bookmark(props) {
  return (
    <div className="bookmark">
      <div className="bookmark__row">
        <div className="bookmark__title">
          <a 
            href={props.url} 
            target="_blank"
            rel="noopener noreferrer">
              {props.title}
            </a>
        </div>
        <Rating value={props.rating}/>
      </div>      
      <div className="bookmark__description">
        {props.description}
      </div>
    </div>
  ) 
}