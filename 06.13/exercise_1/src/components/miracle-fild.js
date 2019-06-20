import React, { Component } from 'react';
import LetterInput from './letter-input'
import GuessWord from './guess-word'

class MiracleField extends Component {
    constructor(props) {
        super(props);
        const WORD = props.wordsArr[this.randIndex()]
        const lettersArray = WORD.split('')
        this.state = { 
            letters: lettersArray.map(letter => ({letter, guessed: false}))
        }
    }

    randIndex = () => Math.floor(Math.random() * this.props.wordsArr.length) 

    checkCurrrentLetter = (currentLetter) => {
        const {letters} = this.state
        this.setState({
            letters: letters.map( el => (el.letter !== currentLetter) ? el : {letter: el.letter, guessed: true})
        })
    }

    render() { 
        const {letters} = this.state
        return ( 
            <>
                <LetterInput checkCurrrentLetter={this.checkCurrrentLetter} />
                <GuessWord letters={letters} />
            </>
         );
    }
}
 
export default MiracleField;