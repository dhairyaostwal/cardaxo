import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './HC6.css'
import arrow from '../../img/arrow.png'

export default function App() {
  const [HC6list, setHC6List] = useState([]);

  useEffect(() => {
    async function getData() {
      const baseURL =
        'https://run.mocky.io/v3/fefcfbeb-5c12-4722-94ad-b8f92caad1ad';
      const res = await axios.get(baseURL);
      console.log(res.data.card_groups[0]);
      console.log(res.data.card_groups[0]);
      setHC6List(res.data.card_groups[0]);
    }

    getData();
  });

  return (
    <div className="wrapper">
      {/* <p>
        <ul>
          <li>{HC6list.name}</li>
          <li></li>
          <li>{HC6list.id}</li>
        </ul>
      </p> */}

      <div className="HC6">
      <img className="HC6logo" src = {HC6list.cards[0].icon.image_url} />
      <h3>{HC6list.cards[0].title}</h3>
      <img className="fampay--arrow" src ={arrow}/>
    </div>
    </div>
  );
}
