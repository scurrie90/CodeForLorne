import React, { Component } from 'react';
export default class Footer extends Component {
    render() {
    let cvData = this.props.cvData;
    return (
        <footer>
        <div className="row">
        <div className="twelve columns">
            <ul className="social-links">
            {
                cvData.socialLinks && cvData.socialLinks.map((item)=>{
                return(
                    <li>
                    <a href={item.url}>
                    <i className={item.className} />
                    </a>
                    </li>
                )
                })
            }
            </ul>
            <ul className="copyright">
            <li>© React Copyright 2020 Simon Currie</li>
            <li>Design by <a title="Styleshout" href="http://www.styleshout.com/free-templates/ceevee">Ceevee @ Styleshout</a></li>
            </ul>
        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
        </div>
    </footer>
    );
    }
}
