import React from 'react';
import OrderRow from './OrderRow';

const OrdersTable = ({newOrder}) => {
    return (
        <table>
            <tbody>
                <tr>
                    <th>Страва</th>
                    <th>Ціна</th>
                </tr>
                {newOrder.order.map((el, i) => <OrderRow name={el} key={i} />)}
                <tr>
                    <td>Загальна ціна</td>
                    <td>{newOrder.costOrderDish1 + newOrder.costOrderDish2 + ' грн'}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default OrdersTable;