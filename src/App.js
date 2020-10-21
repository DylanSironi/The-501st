import React from 'react';
import Header from './Components/Header/Header';
// import Auth from './Components/Auth/Auth';
// import Home from './Components/Home/Home';
// import Account from './Components/Account/Account';
// import Community from './Components/Community/Community';
// import Rules from './Components/Rules/Rules';
// import Game from './Components/Game/Game';
import { withRouter } from 'react-router-dom'
import routes from './routes'
import './App.css';

function App(props) {
  return (
    <div className="App">
      {/* <img src='https://cdn.mos.cms.futurecdn.net/rXQiLcfc89vp3EbYQ58ERH-970-80.jpeg.webp' alt='stars'/> */}
      <div className='components'>
      {props.location.pathname !== '/'
        ? <Header /> 
        : null}
      {routes}
      </div>
    </div>
  );
}

export default withRouter(App);
