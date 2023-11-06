import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Counter} from "./Counter";
import {List} from "./List";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <>

        <Counter  value={5} step={2} name="Counter1"/>
        <br/>
        <Counter  value={-10} name={"Counter2"}/>
        <br/>
        <Counter  step={5} name={"Counter3"}/>

        <List/>
    </>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();