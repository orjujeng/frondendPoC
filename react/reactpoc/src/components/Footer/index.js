import './index.css';
import React from 'react'

export default class Footer extends React.Component {
    handleAllDone = ()=>{
        this.props.deleteAllDone();
    }
    render() {
        const {todos} = this.props.state
        const doneLength = todos.filter((item)=>{
            return item.flag === true
        }).length
        return (<div>
                  <input type ='checkbox'/> 
                  
                  Done {doneLength}/{todos.length}
                  <button onClick={()=>{this.handleAllDone()}}>Delete All Done</button>
                </div>)
    }
}
