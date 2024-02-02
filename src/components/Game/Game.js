import React from 'react';
import GuessForm from '../GuessForm/GuessForm';
import GuessResults from '../GuessResults/GuessResults';
import {NUM_OF_GUESSES_ALLOWED} from '../../constants'
import WonBanner from '../WonBanner';
import LostBanner from '../LostBanner';
import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });


function Game() {
  // handle whether game is running won, or lost
  const [gameStatus, setGameStatus] = React.useState('running')
  
  // this is where we will create state that will handle the list of guesses
  const [guesses, setGuesses] = React.useState([])
  
  // this is where we handle the guess and store that state from guessForm
  function handleNewWord(tentativeGuess) {
    // store the guess in a new array to be used by guessResults
    const nextGuesses = [...guesses, tentativeGuess];
    setGuesses(nextGuesses);

    if (tentativeGuess.toUpperCase() === answer) {
      setGameStatus('won')
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost')
    }
  }


  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessForm handleNewWord={handleNewWord} gameStatus={gameStatus}/>
      {gameStatus === 'won' && (
        <WonBanner numOfGuesses={guesses.length} />
      )}
      {gameStatus === 'lost' && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
