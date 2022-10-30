import React from 'react'
import ReactDOM from 'react-dom'
import logo from './logo.svg';
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <HeaderComponent/>  
            <div className="container">
              <Routes>
                <Route path="/" element={<ListEmployeeComponent/>}></Route>
                <Route path="/employee" element={<ListEmployeeComponent/>}></Route>
                <ListEmployeeComponent/>
              </Routes>
            </div>
          <FooterComponent />
        </div>
      </Router>  
    </div>
  );
}

export default App;
