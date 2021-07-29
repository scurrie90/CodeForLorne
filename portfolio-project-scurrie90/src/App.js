import './App.css';
import React, { Component } from 'react';
import Header from './components/header/header';
import AboutMe from './components/aboutme/aboutme';
import CV from './components/cv/cv';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import cvData from './cvData';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header cvData={cvData}/>
        <AboutMe cvData={cvData}/>
        <CV cvData={cvData}/>
        <Projects cvData={cvData}/>
        <Contact cvData={cvData}/>
        <Footer cvData={cvData}/>
      </div>
    );
  }
}

export default App;

