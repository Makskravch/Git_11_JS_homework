import React, { Component } from 'react';

class MovieInfo extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        const {day, data, list} = this.props
        let objKey = Object.keys(list)
        return (
            <>
                <h2>{day}</h2>
                <h3>{data}</h3>
                <table>
                    <tbody>
                        <tr>
                            <td>{list[objKey[0]].time}</td>
                            <td><strong>{list[objKey[0]].name}</strong></td>
                            <td>{list[objKey[0]].cost}</td>
                        </tr>
                        <tr>
                            <td>{list[objKey[1]].time}</td>
                            <td><strong>{list[objKey[1]].name}</strong></td>
                            <td>{list[objKey[1]].cost}</td>
                        </tr>
                        <tr>
                            <td>{list[objKey[2]].time}</td>
                            <td><strong>{list[objKey[2]].name}</strong></td>
                            <td>{list[objKey[2]].cost}</td>
                        </tr>
                    </tbody>
                </table>
            </>
        );
    }
}

export default MovieInfo;
