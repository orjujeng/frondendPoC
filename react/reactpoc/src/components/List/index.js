import './index.css';
import React from 'react'
import Item from '../Item'
export default class List extends React.Component {
    render() {
        const {todos} = this.props.state
        const {deleteItem} = this.props
        return (
            todos.map((item) => { return <Item subState ={item} deleteItem={deleteItem}/> })
        )
    }
}
