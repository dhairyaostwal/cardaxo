import React from 'react';
import './HC5.css';
import { HC5Data } from '../../data/HC5Data';

function HC5Component(props) {
  return (
    <div style={{ backgroundColor: `${props.bg_color}` }} className="HC5">
      <img className="fampay--gravatar--bg" src={props.bg_image.image_url} />
      <div className="fampay--gravatar--holder">
        {/* <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h2>{props.name}</h2>
          <p>Click to view</p>
        </div> */}
      </div>
    </div>
  );
}

// export default function HC5() {
//   return (
//     <div className="HC5">
//       <img className="fampay--gravatar--bg" src={gravatarBg} />
//       <div className="fampay--gravatar--holder">
//         <img className="fampay--gravatar" src={fampayGravatar} />
//         <div style={{ display: 'flex', flexDirection: 'column' }}>
//           <h2>Save the streak 🔥</h2>
//           <p>10-Day Savings Challenge</p>
//         </div>
//       </div>
//     </div>
//   );
// }

export default function HC5() {
  return (
    <div>
      <div className="HC5Container">
        {HC5Data.map(HC5Component)}
      </div>
    </div>
  );
}
