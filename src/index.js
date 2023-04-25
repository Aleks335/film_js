import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store' //тут меняем
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

// создаем паки  components store>api.js, authSlice.js, index.js
// .module.css создание css


const root = ReactDOM.createRoot(
    document.getElementById('root')
);
root.render(
    <React.StrictMode>
        {/*при необходимости*/}
        <Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>
        {/*<Provider store={store}><App/></Provider>*/}

    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
