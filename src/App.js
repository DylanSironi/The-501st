import React from 'react';
import Auth from './Components/Auth/Auth';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Account from './Components/Account/Account';
import Community from './Components/Community/Community';
import Rules from './Components/Rules/Rules';
import Game from './Components/Game/Game';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <img src='https://cdn.mos.cms.futurecdn.net/rXQiLcfc89vp3EbYQ58ERH-970-80.jpeg.webp' alt='stars'/> */}
      <div className='components'>
        <Auth />
        <Header />
        <Home />
        <Account />
        <Community />
        <Rules />
        <Game />
      </div>
    </div>
  );
}

export default App;
