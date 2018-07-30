import './reset.css';
import React from 'react';
import ReactDOM from 'react-dom';

import {setGuess, setToggle, newGame} from './actions';
import store from "./store";

import './reset.css';
import './index.css';

import Game from './components/game';

console.log(store.getState());
store.dispatch(setGuess(4));
console.log(store.getState());
store.dispatch(setToggle());
console.log(store.getState());
store.dispatch(newGame());
console.log(store.getState());

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
