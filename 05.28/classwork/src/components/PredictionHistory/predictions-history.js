import React, { Component } from 'react';
import './predictions-history.css'

const PredictionHistory = ({ predictionsList }) => {

    return (
        <>
            History
            <hr/>
            <ul className='predictionHistory'>
                {predictionsList.map((el, i) => <li key={i}>{el}</li>)}
            </ul>
        </>
    );
}
 
export default PredictionHistory;