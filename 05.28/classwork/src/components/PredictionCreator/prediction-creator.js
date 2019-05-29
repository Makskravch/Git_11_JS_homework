import React, { Component } from 'react';
import './prediction-creator.css'

class PredictionCreator extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentPrediction: 'No predictiony'
        }
    }

    randomPrediction = () => {
        const {predictions} = this.props
        let randomIndex = Math.floor(Math.random() * this.props.predictions.length)
        return predictions[randomIndex]
    }

    onClick = () => {
        const {addToHistory} = this.props
        const currentPrediction = this.randomPrediction()
        this.setState({
            currentPrediction
        })
        addToHistory(currentPrediction)
    }

    render() { 
        const {currentPrediction} = this.state
        return (
            <>
                <button onClick={this.onClick}>Get prediction</button>
                <br/>
                Your prediction: <span className='predictionSpan'>{currentPrediction}</span>
            </>
        );
    }
}
 
export default PredictionCreator;