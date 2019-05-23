import React, { Component } from 'react';
import HistoryTable from './HystoryTable'

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            compNumbers: this.getStartCompNumbersArray(10),
            steps: [],
            score: 0
        }
    }

    getStartCompNumbersArray = (length) => {
        let arr = []
        for (let i = 1; i <= length; i++) {
            arr.push(i)
        }
        return arr
    }

    getRandomCompNumberIndex = () => {
        let randIndex = Math.floor(Math.random() * this.state.compNumbers.length)
        return randIndex
    }

    check = () => {
        let randIndex = this.getRandomCompNumberIndex()
        let compNum = this.state.compNumbers[randIndex]
        let userNum = parseInt(this.refs.userNum.value)
        let addScore = 0
        if (compNum == userNum) {
            addScore = 1
        }
        const {compNumbers, steps, score} = this.state
        this.setState({
            compNumbers: compNumbers.filter((el, i) => i != randIndex),
            steps: [...steps, {num: 10 - compNumbers.length + 1, userNum, compNum}],
            score: score + addScore
        })
    }

    render() { 
        const {steps, score, compNumbers} = this.state
        return (
            <>
                <div>
                    <div>
                        Можливі числа: {compNumbers.map(x => String(x)).join(' - ')}
                    </div>
                    <label>
                        Число користувача:
                        <input ref="userNum" type="number"/>
                    </label>
                    <button onClick={this.check}>Перевірити</button>
                </div>
                <h2>Кількість вгаданих чисел: {score}</h2>
                <HistoryTable steps={steps} />
            </>
        );
    }
}
 
export default Game;