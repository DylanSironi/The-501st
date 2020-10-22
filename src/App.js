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
  console.log(props.location.pathname)
  return (
    <div className="App">
      {props.location.pathname === '/' && <img src='https://cdn.hipwallpaper.com/i/64/56/IVUp5u.jpg' alt='stars'/> }
      {props.location.pathname === '/account' && <img className='background' src='https://i1.wp.com/opendoorpride.org/wp-content/uploads/2017/05/simple-one-color-grey-background-1920x1200.jpg?ssl=1' alt='grey'/> }
      {props.location.pathname === '/home' && <img className='background' src='https://i1.wp.com/opendoorpride.org/wp-content/uploads/2017/05/simple-one-color-grey-background-1920x1200.jpg?ssl=1' alt='grey'/> }
      {props.location.pathname === '/community' && <img className='background' src='https://i1.wp.com/opendoorpride.org/wp-content/uploads/2017/05/simple-one-color-grey-background-1920x1200.jpg?ssl=1' alt='grey'/> }
      {props.location.pathname === '/rules' && <img className='background' src='https://i1.wp.com/opendoorpride.org/wp-content/uploads/2017/05/simple-one-color-grey-background-1920x1200.jpg?ssl=1' alt='grey'/> }
      {props.location.pathname === '/game' && <img className='background' src='https://i1.wp.com/opendoorpride.org/wp-content/uploads/2017/05/simple-one-color-grey-background-1920x1200.jpg?ssl=1' alt=''/> }
      <div className='components'>
      {props.location.pathname !== '/' && <Header /> }
      {routes}
      </div>
    </div>
  );
}

export default withRouter(App);
