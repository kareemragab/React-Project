import React, { Component } from 'react';
import About from './../About';
import Home from './../Home';
import Navbar from './../Navbar';
import Contact from './../Contact';
import Profile from './../Profile';
import Portfolio from './../Portfolio';
import SocailMedia from './../SocailMedia';
import Work from './../Work';
import Footer from './../Footer';

class Index extends Component {
  render(){
  return (
    <div className="App">
        <Home/>
        <Work/>
        <Portfolio/>
        <Profile/>
        <About/>
        <SocailMedia/>
        <Contact/>
    </div>
  );
}
}

export default Index;
