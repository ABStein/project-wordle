import React from 'react';

function Guess() {

  const wordCells = (
    <p className="guess">
      <span className="cell">H</span>
      <span className="cell">E</span>
      <span className="cell">L</span>
      <span className="cell">L</span>
      <span className="cell">O</span>
    </p>
  )
  
  return(
    <div className='guess-results'>
      {wordCells}
      {wordCells}
      {wordCells}
      {wordCells}
      {wordCells}
    </div>
  );
}

export default Guess;
