import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    let cvData = this.props.cvData;
    return (
            <section id="projects">
                <div className="row">
                <div className="twelve columns collapsed">
                    <h1>Highlighted Projects</h1>
                    <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
            {
                cvData.projects && cvData.projects.map((item)=>{
                return(
                    <div className="columns portfolio-item">
                    <div className="item-wrap">
                        <a href={`${item.liveUrl}`}>
                        <img src={`${item.imgUrl}`} className="item-img"/>
                        <div className="overlay">
                            <div className="portfolio-item-meta">
                            <h5>{item.name}</h5>
                            <p>{item.description}</p>
                            </div>
                        </div>
                        </a>
                    </div>
                    </div>
                )
                })
            }
          </div>
        </div>
      </div>
  </section>
        );
  }
}