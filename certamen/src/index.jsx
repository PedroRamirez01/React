import React from "react";
import ReactDOM from 'react-dom';
import {App} from './App';
import { BrowserRouter } from 'react-router-dom';
import './style.css';
import './bootstrap.min.css';

const rootElement = document.getElementById("root");

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    , rootElement);
