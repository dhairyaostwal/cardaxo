import React from 'react';
import { HC3Data } from '../../data/HC3Data';
import './HC3.css';

function HC3Component(props) {
  return (
    <div
      style={{
        backgroundColor: `${props.bg_color}`,
        backgroundImage: `url(${props.bg_image.image_url})`,
      }}
      className="HC3"
    >
      <div className="HC3--content">
        <h1>{props.title}</h1>
        <h3 style={{ color: '#131313' }}>{props.description}</h3>
        <a
          href={props.cta[0].url}
          style={{
            backgroundColor: `${props.cta[0].bg_color}`,
            color: `${props.cta[0].text_color}`,
          }}
          className="HC3--btn"
        >
          {props.cta[0].text}
        </a>
      </div>
    </div>
  );
}

export default function HC3() {
  return <div>{HC3Data.map(HC3Component)}</div>;
}
