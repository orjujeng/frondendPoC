
import React from 'react'
export default class ReactRedux extends React.Component {
    add=()=>{
        this.props.add(1);
    }
    render() {
        return (
           <div>
            react redux test {this.props.count}
            <button onClick={this.add}>add 1</button>
           </div>
        )
    }
}
