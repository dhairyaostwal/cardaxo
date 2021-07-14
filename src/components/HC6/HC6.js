import React from 'react';
import './HC6.css';
import arrow from '../../img/arrow.png';
import { HC6Data } from '../../data/HC6Data';

function HC6Component(props) {
  return (
    <div className="HC6">
      <img className="HC6logo" src={props.icon.image_url} />
      <h3 style={{ fontWeight: '500' }}><a href={props.url}>{props.title}</a></h3>
      <img className="fampay--arrow" src={arrow} />
    </div>
  );
}

// export default function HC6() {
//   const [HC6list, setHC6List] = useState([]);

//   useEffect(() => {
//     async function getData() {
//       const baseURL =
//         'https://run.mocky.io/v3/fefcfbeb-5c12-4722-94ad-b8f92caad1ad';
//       const res = await axios.get(baseURL);
//       // console.log(res.data.card_groups[0]);
//       setHC6List(res.data.card_groups[0]);
//     }

//     getData();
//   });

//   return (
//     <div className="wrapper">
//       <div className="HC6">
//         <img className="HC6logo" src={HC6list.cards[0].icon.image_url} />
//         <h3 style={{ fontWeight: '500' }}>{HC6list.cards[0].title}</h3>
//         <img className="fampay--arrow" src={arrow}>
//           {/* <a href={HC6list.cards[0].url} /> */}
//         </img>
//       </div>
//     </div>
//   );
// }

export default function HC6() {
  return <div>{HC6Data.map(HC6Component)}</div>;
}
