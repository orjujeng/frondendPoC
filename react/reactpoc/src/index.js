import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import Title from './components/Title';
import ClassComponents from './components/ClassComponents';

const root = ReactDOM.createRoot(document.getElementById('root'));
const p = {name : '12'}
root.render(
    <div>
    <App/>
    {/* <ClassComponents {...p}/> */}
    </div>
);
