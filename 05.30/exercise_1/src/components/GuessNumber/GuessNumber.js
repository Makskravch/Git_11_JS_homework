import React, { Component } from 'react';
import GameHistory from '../GameHistory'

class GuessNumber extends Component {
    constructor(props) {
        super(props);
        this.state = {
            compValue: [],
            hystorySteps: {
                firstPlayerStep: [],
                secondPlayerStep: []
            },
            winnerName: 'No'
        }
    }

    getRandomValue = () => {
        return Math.floor(Math.random() * 100 + 1)
    }

    addToHistory = (prediction) => {
        this.setState((prevState) => {
            const {compValue} = prevState
            return {
                compValue: [...compValue, prediction]
            }
        })
    }

    check = () => {
        const randNumber = this.getRandomValue()
        this.addToHistory(randNumber)

        let firstValue = parseInt(this.refs.firstInput.value)
        let secondValue = parseInt(this.refs.secondInput.value)
        let firstValueABS = Math.abs(randNumber - firstValue)
        let secondValueABS = Math.abs(randNumber - secondValue)
        
        if (firstValueABS < secondValueABS) {
            this.setState({
                winnerName: this.props.firstPlayerName
            })
        } else if (firstValueABS > secondValueABS) {
            this.setState({
                winnerName: this.props.secondPlayerName
            })
        } else {
            this.setState({
                winnerName: 'Draw'
            })
        }

        const {firstPlayerStep, secondPlayerStep} = this.state.hystorySteps
        this.setState({
            hystorySteps: {
                firstPlayerStep: [...firstPlayerStep, firstValue],
                secondPlayerStep: [...secondPlayerStep, secondValue]
            }
        })
    }

    render() { 
        return (
            <div>
                <p>Гра «Відгадай число».  Двоє гравців вказуються свої версії чисел. Виграє той, чиє число ближче до числа, яке згенеровано комп’ютером випадковим чином.</p>
                {this.props.firstPlayerName}: <input ref='firstInput' type='number' placeholder='Enter the number 1-100' />
                {this.props.secondPlayerName}: <input ref='secondInput' type='number' placeholder='Enter the number 1-100' />
                <br/>
                <button onClick={this.check}>Get result</button>
                <h3>{this.state.winnerName} win!</h3>
                
                <GameHistory names={this.props} state={this.state} />
            </div>
        );
    }
}
 
export default GuessNumber;