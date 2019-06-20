import React, { Component } from 'react';
import AddPair from '../add-pair'
import PairsViewer from '../pairs-viewer'
import {v4} from 'uuid' // npm i uuid  (генератор Id)
import {Link, Route, Switch} from 'react-router-dom'

class PairsManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pairs: {}
        }
    }

    addNewPair = (boyName, girlName) => {
        const newId = v4() // генератор Id
        this.setState({
            pairs: {
                ...this.state.pairs,
                [newId]: {
                    id: newId,
                    boy: boyName,
                    girl: girlName
                }
            }
        })
    }

    onDelete = (id) => {
        const {pairs} = this.state
        const newPairs = {...pairs}
        delete newPairs[id]
        this.setState({
            pairs: newPairs
        })
    }

    render() { 
        const {pairs} = this.state
        return (
            <>
                <div>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/add'>Add new pair</Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <Switch>
                        <Route path='/' exact component={ () => <PairsViewer pairs={pairs} onDelete={this.onDelete} /> }/>
                        <Route path='/add' component={ () => <AddPair addNewPair={this.addNewPair} /> }/>
                    </Switch>
                </div>
                
                {/* <AddPair addNewPair={this.addNewPair} />
                <br/>
                <hr/>
                <PairsViewer pairs={pairs} onDelete={this.onDelete} /> */}
            </>
        );
    }
}
 
export default PairsManager;