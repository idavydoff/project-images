import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Store from "./mobx";
import { Provider } from "mobx-react";

ReactDOM.render(<Provider Store={Store}><App/></Provider>, document.getElementById('root'));
serviceWorker.unregister();
