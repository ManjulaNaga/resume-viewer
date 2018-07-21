import React, { Component } from 'react';
import './App.css';

import $ from 'jquery';
import Intro from './component/Intro.js';
import About from './component/About.js';
import Resume from './component/Resume.js';
import Header from './component/Header.js';
import Contact from './component/Contact.js';
import Footer from './component/Footer';
import Portfolio from './component/Portfolio';
import Testimonials from './component/Testimonials';
import UploadFile from './component/UploadFile';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstName : 'Naga Manjula',
      lastName : 'Koutha',
      resumeData : {}
    }
  }
  getResumeData(){
    $.ajax({
      url : 'http://localhost:3000/resumeData.json',
      dataType : 'json',
      cache : false,
      success : function(data){
        console.log("success");
        this.setState({resumeData : data});
        console.log(this.state.resumeData);
      }.bind(this),
      error : function(xhr,status,err){
        console.log(err);
        alert(err);
      }
    });
  }
  componentDidMount(){
    this.getResumeData();
  }
  render() {
    console.log(this.state.resumeData);
    return (

      <div className="App">
        <Header />
        <Intro/>
        <About data = {this.state.resumeData.basics}/>
        <Resume/>
        <Header/>
        <UploadFile/>
        <Portfolio/>
        <Testimonials/>
        <Contact/>
        <Footer/>

      </div>
    );
  }
}

export default App;
