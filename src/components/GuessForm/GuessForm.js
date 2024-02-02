import React from 'react';

function GuessForm({gameStatus, handleNewWord}) {
  const [tentativeGuess, setTentativeGuess] = React.useState('')

  function handleSubmit(event) {
    event.preventDefault();

    handleNewWord(tentativeGuess);

    setTentativeGuess('');
  }

  return(
    <div>
      <form
       className='guess-input-wrapper'
       onSubmit={handleSubmit}
      >
        <label htmlFor='guess-input'>Enter guess:</label>
        <input
          required={true} 
          type='text'
          id='guess-input'
          disabled={gameStatus !== 'running'}
          value={tentativeGuess}
          pattern='[a-zA-Z]{5}'
          onChange={e => {
            const newWord = e.target.value;
            const upCaseNewWord = newWord.toUpperCase() 
            setTentativeGuess(upCaseNewWord);
          }}
        />
      </form>
    </div>
  );
}

export default GuessForm;
