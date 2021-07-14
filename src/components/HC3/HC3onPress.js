import React from 'react';
import './HC3.css';
import { HC3MessageData } from '../../data/HC3MessageData';

function messageComponent(props) {
  return (
    <div className="messageComponent">
      <img style={{ width: '2rem', height: 'auto' }} src={props.img_url} />
      <div>{props.message}</div>
    </div>
  );
}

export default function HC3onPress() {
  return (
    <div className="HC3--hidden--payment">
      {HC3MessageData.map(messageComponent)}
    </div>
  );
}
