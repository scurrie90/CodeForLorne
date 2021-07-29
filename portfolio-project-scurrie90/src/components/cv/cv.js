import React, { Component } from 'react';
import cvData from '../../cvData';
export default class CV extends Component {
  render() {
    return (
      <React.Fragment>
      {
      <section id="CV">
      <div className="row education">
        <div className="three columns header-col">
          <h1><span>Education</span></h1>
        </div>

        <div className="nine columns main-col">
        {
                cvData.education && cvData.education.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.school}</h3>
                          <p className="info">
                          {item.degree}
                          <span>•</span> <em className="date">{item.year}</em></p>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>
      <div className="row work">
        <div className="three columns header-col">
          <h1><span>Employment</span></h1>
        </div>
        <div className="nine columns main-col">
          {
            cvData.employment && cvData.employment.map((item) => {
                return(
                    <div className="row item">
                        <div className="twelve columns">
                <h3>{item.employer}</h3>
                <p className="info">{item.occupation} <span>•</span> <em className="date">{item.date}</em></p>
            </div>
          </div> 
                )
          })
        }
        </div> 
      </div> 
    </section> 
    }
      </React.Fragment>
    );
  }
}