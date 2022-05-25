import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import "./App.css";
import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux'
import {Store} from './Components/Redux//Store/Store.js';

ReactDom.render(
<>
<Provider store={Store}>
<App />
</Provider>

</>, document.getElementById("root")

);