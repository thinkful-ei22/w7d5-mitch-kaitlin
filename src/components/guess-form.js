import React from 'react';
import {connect} from 'react-redux';
import {setGuess} from '../actions'
import './guess-form.css';

export function GuessForm(props) {
  const submit = function(e) {
    e.preventDefault();
    props.dispatch(setGuess(e.target.userGuess.value));
    e.target.userGuess.value = '';
  };

  return (
    <form onSubmit={e => submit(e)}>
      <input type="number" name="userGuess" id="userGuess"
        className="text" maxLength="3" autoComplete="off"
        placeholder="Enter your Guess" required />
      <input 
        type="submit" id="guessButton" 
        className="button" name="submit" value="Guess" />
    </form>
  );
}

export default connect()(GuessForm);