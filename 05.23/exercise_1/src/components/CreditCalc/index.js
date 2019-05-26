import React, { Component } from 'react';

class CreditCalc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    onChange = () => {
        let creditSum = parseFloat(this.refs.creditSum.value)
        let monthCount = parseInt(this.refs.monthCount.value)

        let totalOverpayment = this.refs.totalOverpayment
        let monthlyAmount = this.refs.monthlyAmount
        monthlyAmount.value = creditSum * 1.25 / monthCount
        totalOverpayment.value = creditSum * 1.25
    }

    render() { 
        return (
            <div>
                <h1>Credit calc</h1>
                Сума кредиту:
                <input ref="creditSum" type="number" onChange={this.onChange} />
                <br />
                Кількість місяців: 
                <input ref="monthCount" type="number" onChange={this.onChange} />
                <br />
                Сума щомісячного платежу:
                <input ref="monthlyAmount" type="number" disabled />
                <br />
                Загальна переплата:
                <input ref="totalOverpayment" type="number" disabled />
            </div>
        );
    }
}
 
export default CreditCalc;