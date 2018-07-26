import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfo: false,
      userGuess:'',
      feedback:'Make your guess!',
      guesses:[],
      answer: Math.round(Math.random()* 100) + 1
    };
  }

  handleGuess(userGuess) {
    userGuess = parseInt(userGuess, 10);

    if (isNaN(userGuess)) {
      this.setState({ feedback: 'Please enter a valid number'});
      return;
    }

    const difference = Math.abs(userGuess - this.state.answer);

    let feedback;
    if (difference >= 50) {
      feedback = 'You are ice cold';
    } else if (difference >= 30) {
      feedback = 'You are cold';
    } else if (difference >= 10) {
      feedback = 'You are warm';
    } else if (difference >= 1) {
      feedback = 'You are hot';
    } else {
      feedback = 'You got it';
    }

    this.setState({ feedback, guesses: [...this.state.guesses, userGuess]});
  }

  handleToggle() {
    this.setState({showInfo: !this.state.showInfo});
  }

  newGame() {
    this.setState({
      guesses: [],
      feedback:'Make your guess!',
      answer: Math.round(Math.random()* 100) + 1
    });
  }

  render(){
    const { feedback, guesses, showInfo, userGuess } = this.state;
    const count = guesses.length;

    return (
      <div>
        <Header 
          showInfo={showInfo}
          handleToggle={()=> this.handleToggle()}
          newGame={() => this.newGame()} />
        <GuessSection 
          feedback={feedback}
          userGuess={userGuess}
          handleGuess={userGuess => this.handleGuess(userGuess)} />
        <GuessCount 
          count={count} />
        <GuessList 
          guesses={guesses} />
      </div>
    );}
}

