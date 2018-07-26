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
      feedback:'Make your guess!',
      count:0,
      guesses:[1, 2, 3]
    };
  }

  render(){
    return (
      <div>
        <Header 
          showInfo={this.state.showInfo}
          handleToggle={()=>{this.setState({showInfo: !this.state.showInfo});}} />
        <GuessSection 
          feedback={this.state.feedback}
          changeFeedback={(text) => {this.setState({feedback: text});}} />
        <GuessCount 
          count={this.state.count}
          updateCount={(value)=>{this.setState({count:value});}} />
        <GuessList 
          guesses={this.state.guesses}
          /* listGuesses={(guesses, value)=>{this.setState({guesses:[...guesses, value]});}}  *//>
      </div>
    );}
}

