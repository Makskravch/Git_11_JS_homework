import React, { Component } from 'react';

class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        const {title, list} = this.props
        return (
            <>
                <h1>{title}</h1>
                <ul>
                    {
                        list.map((el, i)=><li key={i}>{el}</li>)
                    }
                </ul>
            </>
        );
    }
}
 
export default ToDo;