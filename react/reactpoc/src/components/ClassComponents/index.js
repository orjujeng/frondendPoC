import React from "react";
import PropTypes from "prop-types";

export default class ClassComponents extends React.Component {
    state = { flag: true }
    static propTypes={
        name:PropTypes.string
    }
    render() {
        const {flag} = this.state
        // const {key} = 
        console.log(this)
        return <span onClick={this.changeFlag} >This is ClassComponents state test {flag?'true':'false'} {this.props.name}</span>
    }

    changeFlag=()=>{
        console.log(this)
        const {flag} = this.state
        this.setState({flag:!flag})
    }
}


