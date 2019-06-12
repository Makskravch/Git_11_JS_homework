import React, { Component } from 'react';

const WORDS = ['apple', 'banana', 'kiwi', 'orange', 'pineapple']

function random(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function Child(props) {
    const {onSubmit, onChangeValue, currentValue} = props
    return (
        <form onSubmit={onSubmit}>
            <input type="text" value={currentValue} onChange={onChangeValue} />
            <button type="submit">Submit</button>
        </form>
    )
}

class FieldMiracles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            letter: '',
            guessedLetters: [],
            currentWord: WORDS[random(0, WORDS.length - 1)]
        }
    }

    doMainLogic() {
        const { letter, guessedLetters, currentWord } = this.state
        this.setState({
            guessedLetters: currentWord.includes(letter)
                ? guessedLetters.concat(letter)
                : guessedLetters,
            letter: ''
        })
    }

    handleSubmit(e){
        e.preventDefault()
        this.doMainLogic()
    }

    handleLetterChange(e){
        this.setState({
            letter: e.target.value.slice(-1)
        })
    }

    render() { 
        return (
            <>
                <h1>Guess word</h1>
                <hr/>
                <Child
                    currentValue={this.state.letter}
                    onChangeValue={this.handleLetterChange.bind(this)}
                    onSubmit={this.handleSubmit.bind(this)} />
                {this.state.currentWord.split('').map((char, i) => (
                    <span key={i}>
                        [{this.state.guessedLetters.includes(char) ? char : '*'}]
                    </span>
                ))}
            </>
        );
    }
}
 
export default FieldMiracles;