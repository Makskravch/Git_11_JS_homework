import React from 'react';
import StepRow from './StepRow'

const HistoryTable = ({steps}) => {
    return (
        <table>
            <tr>
                <th>Крок</th>
                <th>Число користувача</th>
                <th>Число компютера</th>
            </tr>
            {steps.map((step, i) => <StepRow {...step} />)}
        </table>
    );
}
 
export default HistoryTable;