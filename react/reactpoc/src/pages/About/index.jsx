
import React from 'react'
import { Link, BrowserRouter, Route, NavLink, Redirect } from 'react-router-dom'
import Sec from './Sec'
import Fir from './Fir'
export default class About extends React.Component {

    render() {

        return (<div>
            <h1>This is about route</h1>
            <hr />
            {/* <Link to={`/about/1/${1}`}>1     </Link> */}
            <Link replace to={{pathname:'/about/1',state:{id:1}}}>1     </Link>
            <Link replace to='/about/2'>2      </Link>
            <hr />
            <Route path="/about/1/" component={Fir} />
            <Route path="/about/2" component={Sec} />
            <Redirect to='/about/1' />
        </div>)
    }


}

