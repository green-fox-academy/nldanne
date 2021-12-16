import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import reportWebVitals from './reportWebVitals';
//import {render} from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import SimpleGolden from './SimpleGolden';

/* The original code after installation
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/simple/states' element={<SimpleGolden />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
