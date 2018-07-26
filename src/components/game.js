import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfo: false
    };
  }

  render(){
    return (
      <div>
        <Header 
          showInfo={this.state.showInfo}
          handleToggle={()=>{this.setState({showInfo: !this.state.showInfo});}} />
        <GuessSection feedback="Make your guess!" />
        <GuessCount count={3} />
        <GuessList guesses={[10, 15, 25]} />
      </div>
    );}
}

