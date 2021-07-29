import React, { Component } from 'react';
import cvData from '../../cvData';
export default class AboutMe extends Component {
  render() {
    return (
      <React.Fragment>
      {
      <section id="aboutMe">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/profilepic.jpg" alt="" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>
                {
                    cvData.aboutMe1
                } <br /><br />
                {
                    cvData.aboutMe2
                }
            </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{cvData.name}</span><br />
                  <span>{cvData.address1}<br />
                    {cvData.address2}
                  </span><br />
                  <span>{cvData.email}</span><br />
                  <span>{cvData.phoneNumber}</span><br />
                  <span>{cvData.website}</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href="#" className="button"><i className="fa fa-download" />Download Resume</a>
                </p>
              </div>
            </div> 
          </div> 
        </div>
      </section>
    }
    </React.Fragment>
    );
  }
}