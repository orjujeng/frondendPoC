import './index.css';
import React from 'react'
import {nanoid} from 'nanoid'
export default class Header extends React.Component {
    newItem = React.createRef();

    addItem = () => {
        console.log(this.newItem)
        const tirmResult = this.newItem.current.value.trim()
        if (tirmResult === '') 
            { 
                alert("please check the format of input") 
            } else {
                const filterArray =this.props.state.todos.filter((item) => { return item.name === tirmResult })
                filterArray.length>=1?alert("Have item in record please check"):this.props.addState({id:nanoid(),name:tirmResult,flag:false})
            }
    }
    render() {
        return (
            <div>
                <input type='text' placeholder='please add the name of the items' ref={this.newItem} />
                <button onClick={this.addItem}>Submit</button>
            </div>
        )
    }
}

