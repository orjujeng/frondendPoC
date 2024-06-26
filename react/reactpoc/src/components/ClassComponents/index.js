import React from "react";
import PropTypes from "prop-types";

export default class ClassComponents extends React.Component {
    state = { flag: true, 'adv': false }
    static propTypes = {
        name: PropTypes.string
    }
    input2=React.createRef();
    render() {
        const { flag,adv } = this.state/*  */
        return (<div>
                 <span onClick={this.changeFlag}>This is ClassComponents state test {flag ? 'true' : 'false'} {this.props.name} {this.state.name}</span>
                 <hr/>
                 <input type='text' ref={c=>this.input1=c}></input>
                 <input type='text' ref={this.input2}></input>
                 <div onClick={this.showInput}>click me</div>
                 <div onClick={this.selfChange} ref={(c)=>{this.selfChange1=c}}>self change</div>
                 <div onClick={this.adv(true)} >adv change {adv ? 'true' : 'false'}</div>
               </div>)
    }

    changeFlag = () => {
        console.log(this)
       
        const { flag } = this.state
        this.setState({ flag: !flag })
    }

    showInput=(event)=>{
        console.log(this.input1.value)
        console.log(this.input2.current.value)
        event.target.innerHTMl = this.input2.current.value
        // bug
    }

    selfChange=()=>{
        console.log(this.selfChange1.innerHTML)
    }

    adv=(flag)=>{
        console.log(flag)
        return (flag)=>{this.setState({'adv':flag})}
    }

    static getDerivedStateFromProps(props,state) {
        const {name}=props
        console.log('getDerivedStateFromProps')
        return props
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    shouldComponentUpdate(){
        // console.log('shouldComponentUpdate')
        // if(this.state.name==='12'){
        //     return true;
        // }
        // return false;
        return true;
    }

    getSnapshotBeforeUpdate(a,b,c){
        console.log('getSnapshotBeforeUpdate',a,b,c,this.props)
        return null;
    }

    componentDidUpdate(preProps,preState,snapshotValue){
        console.log('componentDidUpdate',preProps,preState,snapshotValue);
    }

    componentWillUnmount(){

        console.log('componentWillUnmount');
    }
}


