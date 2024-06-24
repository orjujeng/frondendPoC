import './index.css';
import React from 'react'

export default class Item extends React.Component {
    
    handleDelete=(id)=>{
        this.props.deleteItem(id);
    }
    render() {
        const { subState } = this.props
        return (<div>
            <span>{subState.name}</span>
            <input type='checkbox' defaultChecked={subState.flag?true:false}/>
            <button onClick={()=>{this.handleDelete(subState.id)}}>Delete</button>
            </div>)
    }
}

