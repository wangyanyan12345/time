import './App.css';
import {useState,userEffect} from "react";

import React from 'react';
import {BrowserRouter,Link,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import News from './components/News';
// import Log from './components/Log';

const App = () => {
  const [redBorder, setRedBorder] = useState(true);
  const clickHandler = () => {
    setRedBorder(false);
};

  return (
  <div>
  <button onClick={clickHandler}>按钮</button>
  <p><Link to="/">首页</Link></p>
    <Link to="/news">新闻</Link>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path="/News" element={<News/>} ></Route>
      </Routes>
  </div>
  
  )
}
export default App;
