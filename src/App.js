import React from 'react';  
import {useEffect} from "react";
import { BrowserRouter as Router, Routes ,Route} from "react-router-dom";
import Login from './components/Login';
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import { getUserAuth } from "./actions";
import {connect} from "react-redux";


function App(props) {
  useEffect(()=>{
    props.getUserAuth();
  },[]);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login/>}></Route>
        <Route path='home' element={<><Header/> <Home/></>}></Route>
        </Routes>
    </Router>
  );
}
const mapStateToprops=(state)=>{
  return{};
};
const mapDispatchToProps=(dispatch)=>({
  getUserAuth:() =>dispatch(getUserAuth()),
});
export default connect(mapStateToprops,mapDispatchToProps)(App);
