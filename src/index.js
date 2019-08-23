import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import {BrowserRouter} from "react-router-dom";
// 引入创建好的store实例
import store from './store'
import Page from './Page';
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Page />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
