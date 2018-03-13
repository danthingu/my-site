import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';
import {myAbout,portfolio,resume,testimonials} from './resumeData'


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      
      resumeData:{
        myAbout: myAbout,
        portfolio: portfolio,
        resume: resume,
        testimonials: testimonials
      }
    }
  }

  render() {
    console.log(myAbout);
    return (
      <div className="App">
        <Header data={myAbout} />
        <About data={this.state.resumeData.myAbout} />
        <Resume data={this.state.resumeData.resume}/>
        <Portfolio data={this.state.resumeData.portfolio}/>
      </div>
    );
  }
}

export default App;
