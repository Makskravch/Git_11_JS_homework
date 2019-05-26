import React, { Component } from 'react';
import OrdersTable from './OrdersTable'

class OrderRecorder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            order: [],
            labelOrderDish1: null,
            labelOrderDish2: null,
            costOrderDish1: null,
            costOrderDish2: null,
        }
    }

    order = () => {
        this.setState({order: [this.refs.select1.value, this.refs.select2.value]})
    }

    handleChangeDish1 = (e) => {
        this.setState({ costOrderDish1: parseFloat(e.target.value), labelOrderDish1: e.target.label });
    }

    handleChangeDish2 = (e) => {
        this.setState({ costOrderDish2: parseFloat(e.target.value), labelOrderDish2: e.target.label });
    }

    render() {
        let arrayFirstDish = this.props.menu[0].firstDish
        let arraySecondDish = this.props.menu[1].secondDish

        return (
            <div>
                <div ref="div">
                    Перша страва:
                    <select ref="select1" onChange={this.handleChangeDish1}>
                        <option disabled selected>Оберіть страву</option>
                        {arrayFirstDish.map((el, i) => {
                            return (<option key={i} value={el.cost} label={el.name}>
                                {el.name + ' / ' + el.cost + ' грн / ' + el.time + ' хв'}
                            </option>)
                        })}
                    </select>
                    <br/>
                    Друга страва:
                    <select ref="select2" onChange={this.handleChangeDish2}>
                        <option disabled selected>Оберіть страву</option>
                        {arraySecondDish.map((el, i) => {
                            return (<option key={i} value={el.cost} label={el.name}>
                                {el.name + ' / ' + el.cost + ' грн / ' + el.time + ' хв'}
                            </option>)
                        })}
                    </select>
                    <br/>
                    <button onClick={this.order}>Замовити</button>
                </div>
                <OrdersTable newOrder={this.state} />
            </div>
        );
    }
}

export default OrderRecorder;