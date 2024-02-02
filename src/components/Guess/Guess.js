import React from 'react';
import { range } from '../../utils';
import {checkGuess} from '../../game-helpers';

function Guess({value, answer}) {
  const checkGuessArray = checkGuess(value, answer);
  return(
    <p className="guess">
      {range(5).map((num) => (
        // I don't see why given what we've learned and my experience why this would be too complex? 
        <span key={num} className={`cell ${value ? checkGuessArray[num].status : undefined}`}>
          {value ? value[num] : undefined}
        </span>
    ))}
    </p>
  );
}

export default Guess;
