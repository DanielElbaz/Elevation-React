import './App.css';
import Exercise1 from './intro to react/exercise1';
import Exercise2 from './intro to react/exercise2';
import { Hudini } from './states/exercise1';
import React, { useState } from 'react';
import Home from './states/exercise2/home.jsx';
import Landing from './states/exercise2/landing.jsx';
import Exercise1Input from './input/Exercise1Input.jsx';
import Exercise2Input from './input/Exercise2Input.jsx';
import Exercise1Effect from './UseEffect/Exercise1.jsx';
import Exercise2Effect from './UseEffect/Exercise2.jsx';




function App() {

  const [data, setData] = useState({
    user: "Robyn",
    store: [
      { item: "XSPS Pro Player", price: 800, discount: 0.2, hottest: false },
      { item: "Gizem Backwatch", price: 230, discount: 0.6, hottest: false },
      { item: "Surround Sound Pelican", price: 3099, discount: 0.05, hottest: true }
    ],
    shouldDiscount: false,
    currentPage: "Landing"
  })

  const switchPage = (page) => {
    setData(prev => ({ ...prev, currentPage: page }))
  }

  const toggleDiscount = () =>
    setData(prev => ({ ...prev, shouldDiscount: !prev.shouldDiscount }));


  return (
    <>
      <div>
        {/* <Exercise1 />
        <Exercise2 />
        <Hudini />
        <button onClick={() => switchPage("Landing")}>Go to Landing page</button>
        <button onClick={() => switchPage("Home")}>Go to Home page</button>
        <button onClick={toggleDiscount}>{data.shouldDiscount ? "Disable discount" : "Enable discount"}</button>
        {data.currentPage === "Landing" ? (<Landing user={data.user} store={data.store} />) : (<Home store={data.store} shouldDiscount={data.shouldDiscount} />)}
 */}
        {/* <Exercise1Input />
        <Exercise2Input /> */}
        <Exercise1Effect/>
        <Exercise2Effect/>
      </div>


    </>
  );
}

export default App;
