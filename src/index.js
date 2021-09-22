import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import stores from './stores/stores';
import 'antd/dist/antd.css';
import Home from './pages/home/home';
ReactDOM.render(
  <React.StrictMode>
    <Provider store={stores}>
      <Home />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
