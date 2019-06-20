import React from 'react';
const PairsViewer = ({pairs, onDelete}) => {
    return (
        Object.keys(pairs).length > 0 ?
        (<table>
            <tr>
                <th>Boys</th>
                <th>Girls</th>
            </tr>
            {
                Object.keys(pairs).map(id => (
                    <tr key={id}>
                        <td>{pairs[id].boy}</td>
                        <td>{pairs[id].girl}</td>
                        <td>
                            <button onClick={() => onDelete(id)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))
            }
        </table>) : 'No pairs'
    );
}
 
export default PairsViewer;