import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import Title from './components/Title';
import ClassComponents from './components/ClassComponents';
import { Link, BrowserRouter, Route } from 'react-router-dom'
import store from './redux/store'
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root'));
const p = { name: '12' }
root.render(
    <BrowserRouter>
        <div>
            <Provider store={store}><App /></Provider>

            {/* <ClassComponents {...p}/> */}
        </div>
    </BrowserRouter>
);


