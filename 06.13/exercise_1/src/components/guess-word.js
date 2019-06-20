import React from 'react';

const GuessWord = ({letters}) => {
    return ( 
        <div>
            {letters.map((obj, i) => obj.guessed ? <span key={i}>{obj.letter}</span> : <span key={i}>*</span>)}
        </div>
     );
}
 
export default GuessWord;