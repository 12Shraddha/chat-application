import React from 'react';
import { Provider, useSelector } from "react-redux";
import  Store  from './Store';
import Login from './Components/Login/Login';
import './App.css';
import Navbar from "./Components/Header/Navbar";
import Home from './Components/HomePage/Home';
import data from "./Components/Login/Form";
//import Switch, { Routes } from "react-router-dom";
// import {Route}  from "react-router-dom";
//import { useNavigate } from "react-router-dom";

function App() {
  //const navigate = useNavigate();
  return (
    <div>
      <Provider store={Store}>
        <>
          <div className="App" 
            
            // onLoad={() => navigate("/") }
          >
            <Navbar />
            {/* <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
            </Routes> */}
            <Login/>
          </div>
        </>
      </Provider>
    </div>
  );
}

export default App;
