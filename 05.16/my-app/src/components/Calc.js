import React, { Component } from 'react';

class Calc extends Component {
    constructor(props) {
        super(props);
    }

    myClick=()=>{
        let num1 = parseInt(this.refs.firstNum.value)
        let num2 = parseInt(this.refs.secondNum.value)
        this.refs.result.innerText = num1 + num2
    }

    render() { 
        const {title1, title2, title3, title4} = this.props
        return (
            <>
                <label>
                    {this.props.title1}
                    <input ref='firstNum' type="number"/>
                </label>
                <label>
                {title2}
                    <input ref='secondNum' type="number"/>
                </label>
                <button onClick={this.myClick}>
                {title3}
                </button>
                <p>
                    {title3} = <span ref='result'>0</span>
                </p>
            </>
        );
    }
}
 
export default Calc;