import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Login from './Login';
import { BrowserRouter  as Router,  Routes, Route } from 'react-router-dom';
import Home from './Home';





function App () {
  
 return(
  <>
    <Navbar />
    <Router>
      <Routes>
        <Route path="Login" element= { <Login />} /> 
        <Route path="/" element= { <Home />} /> 
      
      </Routes>
    </Router>
  </>
//   <div>
//  <Navbar/>
// <Login/>
// </div>

 )
  
};






export default App;
