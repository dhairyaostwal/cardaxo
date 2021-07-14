import React from 'react';
import './HC1.css';
import { HC1Data } from '../../data/HC1Data';
import { HC1DataSmallBox } from '../../data/HC1DataSmallBox';

function HC1Component(props) {
  return (
    <div style={{ backgroundColor: `${props.bg_color}` }} className="HC1">
      <img src={props.icon.image_url} className="HC1--logo" />
      <h3 style={{ fontWeight: '500' }}>
        <a href={`${props.url}`}>{props.title}</a>
      </h3>
    </div>
  );
}

export default function HC1() {
  return (
    <div>
      <div className="HC1Container">{HC1Data.map(HC1Component)}</div>
      <div className="HC1Container--NoScroll">
        {HC1DataSmallBox.map(HC1Component)}
      </div>
    </div>
  );
}
