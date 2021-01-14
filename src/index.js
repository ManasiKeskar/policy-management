import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import Policies from './container/Policies';
import reportWebVitals from './reportWebVitals';
import PolicyData from './PolicyData';

//console.log(PolicyData);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Policies policyData={PolicyData} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();