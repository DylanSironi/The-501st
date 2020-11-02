import { combineReducers, createStore} from 'redux';
import reducer from './reducer';
import reducer2 from './reducer2';
import {devToolsEnhancer} from 'redux-devtools-extension';

const reducers = combineReducers({
    userInfo: reducer, 
    postInfo: reducer2
})

export default createStore(reducer, devToolsEnhancer());
// export default createStore(rootReducer, applyMiddleware(promiseMiddleware));