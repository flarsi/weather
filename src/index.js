import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store'
import './index.sass';
import App from './App';
import {LocalStorageProvider} from "./services/localStorage";

const container = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <LocalStorageProvider>
            <App/>
        </LocalStorageProvider>
    </Provider>,
    container
);
