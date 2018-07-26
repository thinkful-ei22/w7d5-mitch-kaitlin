import React from 'react';

import GuessForm from './guess-form';

import './guess-section.css';

export default function GuessSection(props) {
  return (
      <section>
          <h2 id="feedback">{props.feedback}</h2>
          <GuessForm 
            handleGuess={props.handleGuess}/> {/* gets info about if a guess has been entered */}    
      </section>
  );
}

