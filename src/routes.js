import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Auth from './Components/Auth/Auth';
import Account from './Components/Account/Account';
import Home from './Components/Home/Home';
import Community from './Components/Community/Community';
import Rules from './Components/Rules/Rules';
import Game from './Components/Game/Game';

export default (
    <Switch>
        <Route exact path='/' component={Auth} />
        <Route path='/account' component={Account} />
        <Route path='/home' component={Home} />
        <Route path='/community' component={Community} />
        <Route path='/rules' component={Rules}/>
        <Route path='/game' component={Game}/>
    </Switch>
)