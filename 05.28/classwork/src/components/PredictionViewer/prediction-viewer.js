import React, { Component } from 'react';
import PredictionCreator from '../PredictionCreator';
import PredictionHistory from '../PredictionHistory'

class PredictionViewer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            predictionsList: []
        }
    }
    
    addToHistory = (prediction) => {
        // this.setState({                     // Коли наступне значення НЕ залежить від попереднього
        //     predictionsList: [...predictionsList, predictions]
        // })
        this.setState((prevState) => {        // Коли наступне значення залежить від попереднього
            const {predictionsList} = prevState
            return {
                predictionsList: [...predictionsList, prediction]
            }
        })
    }

    render() { 
        const {predictions} = this.props
        const {predictionsList} = this.state
        return (
            <>
                <PredictionCreator predictions={predictions} addToHistory={this.addToHistory} />
                <br/>
                <PredictionHistory predictionsList={predictionsList} />
            </>
        );
    }
}
 
export default PredictionViewer;