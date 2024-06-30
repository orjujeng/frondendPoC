
import React from 'react'
import store from '../../redux/store'
import {createIncrementAction} from '../../redux/action'
export default class Redux extends React.Component {
    

    add=()=>{
        store.dispatch(createIncrementAction(1));
    }

    render() {
        return (
           <div>
            redux test {store.getState()}
            <button onClick={this.add}>add 1</button>
           </div>
        )
    }
    componentDidMount(){
        store.subscribe(()=>{
            this.setState({})
        })
    }
}
