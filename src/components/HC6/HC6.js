import React from 'react';
import './HC6.css';
import arrow from '../../img/arrow.png';
import { HC6Data } from '../../data/HC6Data';

// building prop container

function HC6Component(props) {
  return (
    <div className="HC6">
      <img className="HC6logo" src={props.icon.image_url} />
      <h3 style={{ fontWeight: '500' }}><a href={props.url}>{props.title}</a></h3>
      <img className="fampay--arrow" src={arrow} />
    </div>
  );
}

// mapping data to the prop container

export default function HC6() {
  return <div>{HC6Data.map(HC6Component)}</div>;
}
