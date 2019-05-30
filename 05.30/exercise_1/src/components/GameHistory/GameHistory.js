import React from 'react';
import './GameHistory.css'

const GameHistory = ({names, state}) => {
    return (
        <table>
            <tbody>
                <tr>
                    <td>{names.firstPlayerName}</td>
                    {state.hystorySteps.firstPlayerStep.map((step, i) => <td key={i}>{step}</td>)}
                </tr>
                <tr>
                    <td>{names.secondPlayerName}</td>
                    {state.hystorySteps.secondPlayerStep.map((step, i) => <td key={i}>{step}</td>)}
                </tr>
                <tr>
                    <td>Value</td>
                    {state.compValue.map((step, i) => <td key={i}>{step}</td>)}
                </tr>
            </tbody>
        </table>
    );
}

export default GameHistory;