import React, {useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import CreateOrUpdateTask from "./pages/CreateOrUpdateTask";
import Home from "./pages/Home";
import logo from './img/logo-new-m.svg';

function App() {
    return (
        <Router>
            <div>
                <img src={logo} alt="Logo" className="logo"/>
            </div>
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route path="/createtask" element={<CreateOrUpdateTask dbMethod="Create"/>}/>
                <Route path="/updatetask" element={<CreateOrUpdateTask dbMethod="Update"/>}/>
            </Routes>
        </Router>
    );
}

export default App