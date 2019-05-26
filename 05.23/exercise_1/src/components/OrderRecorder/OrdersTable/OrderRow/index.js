import React from 'react';

const OrderRow = ({name}) => {
    return (
        <tr>
            <td>{name}</td>
            <td>{name + ' грн'}</td>
        </tr>
    )
}

export default OrderRow;