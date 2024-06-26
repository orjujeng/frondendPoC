import './index.css';
import React from 'react'
import PubSub from 'pubsub-js'

export default class Item extends React.Component {
    
    handleDelete=(id)=>{
        this.props.deleteItem(id);
    }
    pubsub =(id)=>{
        console.log(id)
        PubSub.publish('pubsubDeleteId',{'id':id})
        
    }
    render() {
        const { subState } = this.props
        return (<div>
            <span>{subState.name}</span>
            <input type='checkbox' defaultChecked={subState.flag?true:false}/>
            <button onClick={()=>{this.handleDelete(subState.id)}}>Delete</button>
            <button onClick={()=>{this.pubsub(subState.id)}}>Delete</button>
            </div>)
    }

    
}

