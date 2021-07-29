import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    let cvData = this.props.cvData;
    return (
      <React.Fragment>{
        <header id="home">
   `     <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
          <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#aboutMe">About</a></li>
            <li><a className="smoothscroll" href="#CV">CV</a></li>
            <li><a className="smoothscroll" href="#projects">Projects</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
          </ul>
        </nav> `

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">{cvData.name}</h1>
            <h3>I'm an aspiring {cvData.role}.{cvData.roleDescription}</h3>
            <hr />
            <ul className="social">
                {
                    cvData.socialLinks && cvData.socialLinks.map(item =>{
                      return(
                              <li key={item.name}>
                                <a href={item.url} target="_blank"><i className={item.className}></i></a>
                              </li>
                            )
                          }
                    )
                }
            </ul>
          </div>
        </div>
        <p className="scrolldown">
          <a className="smoothscroll" href="#aboutMe"><i className="icon-down-circle" /></a>
        </p>
      </header>
    }
      </React.Fragment>
    );
  }
}