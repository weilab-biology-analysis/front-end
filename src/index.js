import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import stores from './stores/stores';
import 'antd/dist/antd.css';
import Home from './pages/home';
import About from './pages/about/about';
import JobHome from './pages/job-home/jobHome';
import Result from './pages/result/result';
import ServerHome from './pages/server-home/serverHome';
import ServerPage from './pages/server-page/serverPage';
import ResultMail from './pages/result/resultMail/resultMail';
ReactDOM.render(
  <Provider store={stores}>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/jobHome" component={JobHome} />
        <Route exact path="/result" component={Result} />
        <Route exact path="/serverHome" component={ServerHome} />
        <Route exact path="/serverPage" component={ServerPage} />
        <Route exact path="/resultMail" component={ResultMail} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
