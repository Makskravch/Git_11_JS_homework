import React from 'react';

const LetterInput = ({checkCurrrentLetter}) => {
    let textInp
    return ( 
        <>
            <input type='text' ref={ el => textInp = el } />
            <button onClick={() => checkCurrrentLetter(textInp.value)}>
                Check
            </button>
        </>
     );
}
 
export default LetterInput;