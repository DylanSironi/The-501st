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
      <Auth/>
      <Header/>
      <Home />
      <Account/>
      <Community/>
      <Rules/>
      <Game/>
    </div>
  );
}

export default App;
