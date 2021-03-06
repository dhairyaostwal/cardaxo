import React, { useState } from 'react';
import { HC3Data } from '../../data/HC3Data';
import './HC3.css';
import bell from '../../img/bell.png';
import cross from '../../img/cross.png';

// building prop container

function HC3Component(props) {
  const [pressed, isPressed] = useState(false);

  // function for hiding the container as per dismiss and notify clicked

  function removeHC3() {
    var myobj = document.getElementById('NewHC3');
    myobj.remove();
  }

  // function to open the hidden part upon detecting delay => Long press

  function longPress() {
    setTimeout(function () {
      console.log('Long Press');
      isPressed((pressed) => !pressed);
    }, 500);
  }

  return (
    <>
    {/* using ternary operator it displays 
    
      pressed => new screen with message boxes and screen slide to the the right
      not pressed => default screen

     */}
      {!pressed ? (
        <div
          id="HC3"
          style={{
            backgroundColor: `${props.bg_color}`,
            backgroundImage: `url(${props.bg_image.image_url})`,
          }}
          className="HC3"
        >
          <div className="HC3--content">
            <h1>Hey Dhairya {props.formatted_title.text}</h1>
            <h3 style={{ color: '#131313', marginTop: '-0.5rem' }}>
              {props.formatted_description.text}
            </h3>
            <a
              id="HC3--btn"
              onClick={longPress}
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
      ) : (
        <div id="NewHC3" className="NewHC3">
          <div className="HC3--hidden--payment">
            <div className="messageComponent" onClick={removeHC3}>
              <img style={{ width: '2rem', height: 'auto' }} src={bell} />
              <div>remind later</div>
            </div>
            <div id="cross" className="messageComponent" onClick={removeHC3}>
              <img style={{ width: '2rem', height: 'auto' }} src={cross} />
              <div>dismiss now</div>
            </div>
          </div>
          <div
            style={{
              transform: 'translateX(-1%)',
              margin: '3% 0%',
              backgroundColor: `${props.bg_color}`,
              backgroundImage: `url(${props.bg_image.image_url})`,
            }}
            className="HC3"
          >
            <div className="HC3--content">
              <h1 style={{ whiteSpace: 'pre-line' }}>
                Hey Dhairya {props.formatted_title.text}
              </h1>
              <h3 style={{ color: '#131313', whiteSpace: 'nowrap' }}>
                {props.description}
              </h3>
              <a
                id="HC3--btn"
                onClick={longPress}
                style={{
                  transform: 'translate(-10rem,0)',
                  backgroundColor: `${props.cta[0].bg_color}`,
                  color: `${props.cta[0].text_color}`,
                }}
                className="HC3--btn"
              >
                {props.cta[0].text}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// mapping data to the prop container

export default function HC3() {
  return <div>{HC3Data.map(HC3Component)}</div>;
}
