import React, { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/index.js';
import Login from './pages/sys/login.js';

function App() {
  return (
    <Fragment>
      <div className="App">
        <h1>This is React App.</h1>
      </div>
      <div className="App">
        <h1>This is React App.2</h1>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/home" element={<Home/>} />
          {/* <Route exact path="/" element={home} /> */}
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
