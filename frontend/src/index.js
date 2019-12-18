import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Store from "./mobx";
import { Provider } from "mobx-react";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(<Router><Provider Store={Store}><App/></Provider></Router>, document.getElementById('root'));
serviceWorker.unregister();
