import './index.css';
import Footer from '../Footer'
import Header from '../Header'
import List from '../List'
import Item from '../Item'
import React,{lazy,Suspense} from 'react'
import FunComp from '../FunComp'
import PubSub from 'pubsub-js'
import { Link, BrowserRouter,Route,NavLink,Redirect} from 'react-router-dom'

import Redux from '../Redux'
import ReduxRedux from '../../containers/ReactRedux'
const Home = React.lazy(()=>import('../../pages/Home'))
const About = React.lazy(()=>import('../../pages/About'))


export default class App extends React.Component {
  state = { todos: [{ id: 1, name: 'get', flag: true }, { id: 2, name: 'post', flag: true }, { id: 3, name: 'put', flag: true }, { id: 4, name: 'delete', flag: false }] }
  addState = (stateObj) => {
    const { todos } = this.state
    const newState = [...todos, stateObj]
    this.setState({ todos: newState })
  }
  deleteItem = (id) => {
    const { todos } = this.state
    const newState = todos.filter((item) => { return item.id !== id })
    this.setState({ todos: newState })
  }
  deleteAllDone = () => {
    const { todos } = this.state
    const newState = todos.filter((item) => { return item.flag === false })
    this.setState({ todos: newState })
  }
  render() {
    return (
      <div>
        <Link to="/about">About</Link>
        <hr></hr>
        <NavLink to="/home">home</NavLink>
        <hr></hr>
        <Header state={this.state} addState={this.addState} />
        <List state={this.state} deleteItem={this.deleteItem} />
        <Footer state={this.state} deleteAllDone={this.deleteAllDone} />
        <hr></hr>
        <Suspense fallback={<h1>Loading</h1>}>
        <Route path="/about" component={About} />
        <Route path="/home" component={Home} />
        <Redirect to='/home'/>
        </Suspense>
        
        <hr></hr>
        <Redux/>
        <ReduxRedux/>

        <hr/>
        <FunComp/>
      </div>
    );
  }
  componentDidUpdate(preProps, preState, sl) {
    PubSub.subscribe('pubsubDeleteId', (msg, data) => {
      const { todos } = this.state
      const newState = todos.filter((item) => { return item.id !== data.id })
      this.setState({ todos: newState })
    })
  }
};
