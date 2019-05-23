import React from 'react';

const Steprow = ({num, userNum, compNum}) => {
    return (
        <tr>
            <td>{num}</td>
            <td>{userNum}</td>
            <td>{compNum}</td>
        </tr>
    );
}
 
export default Steprow;