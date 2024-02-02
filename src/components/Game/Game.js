import React from 'react';
import GuessForm from '../GuessForm/GuessForm';
import GuessResults from '../GuessResults/GuessResults';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });


function Game() {
  // this is where we will create state that will handle the list of guesses
  const [guesses, setGuesses] = React.useState([])
  
  // this is where we handle the guess and store that state from guessForm
  function handleNewWord(tentativeGuess) {

    // store the guess in a new array to be used by guessResults
    const nextGuesses = [...guesses, tentativeGuess];
    setGuesses(nextGuesses);
  }


  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessForm handleNewWord={handleNewWord} />
    </>
  );
}

export default Game;
