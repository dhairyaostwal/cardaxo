import React from 'react';
import './HC9.css';
import { HC9Data } from '../../data/HC9Data';

function HC9Component(props) {
  return (
    <div className="HC9">
      <img className="HC9--img" src={props.bg_image.image_url} />
      {/* <div className="fampay--gravatar--holder"> */}
        <div className="HC9--content">
        <a href={props.url}>
          {props.name}
          </a>
        {/* </div> */}
      </div>
    </div>
  );
}

export default function HC9() {
  return <div className="HC9Container">{HC9Data.map(HC9Component)}</div>;
}
