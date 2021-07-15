import React from 'react';
import './HC5.css';
import { HC5Data } from '../../data/HC5Data';

// building prop container

function HC5Component(props) {
  return (
    <div style={{ backgroundColor: `${props.bg_color}` }} className="HC5">
      <a href={props.url}>
        <img className="fampay--gravatar--bg" src={props.bg_image.image_url} />
      </a>
    </div>
  );
}

// mapping data to the prop container

export default function HC5() {
  return (
    <div>
      <div className="HC5Container">{HC5Data.map(HC5Component)}</div>
    </div>
  );
}
