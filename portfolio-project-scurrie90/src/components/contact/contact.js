import React, { Component } from 'react';
import cvData from '../../cvData';
export default class Contact extends Component {
  render() {
    return (
      <React.Fragment>
      {
          <section id="contact">
            <div className="row section-head">
                <div className="two columns header-col">
                <h1><span>Contact Me</span></h1>
                </div>
                <div className="ten columns">
                <p className="lead">Please fill out the form below to get in touch, or contact me via my social or listed info.
                </p>
                </div>
            </div>
            <div className="row">
                <div className="eight columns">
                {/* form */}
                <form action method="post" id="contactForm" name="contactForm">
                    <fieldset>
                    <div>
                        <label htmlFor="contactName">Name <span className="required">*</span></label>
                        <input type="text" defaultValue size={35} id="contactName" name="contactName" />
                    </div>
                    <div>
                        <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                        <input type="text" defaultValue size={35} id="contactEmail" name="contactEmail" />
                    </div>
                    <div>
                        <label htmlFor="contactSubject">Subject</label>
                        <input type="text" defaultValue size={35} id="contactSubject" name="contactSubject" />
                    </div>
                    <div>
                        <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                        <textarea cols={50} rows={15} id="contactMessage" name="contactMessage" defaultValue={""} />
                    </div>
                    <div>
                        <button className="submit">Submit</button>
                        <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                        </span>
                    </div>
                    </fieldset>
                </form> {/* Form End */}
                {/* contact-warning */}
                <div id="message-warning">Did not send</div>
                {/* contact-success */}
                <div id="message-success">
                    <i className="fa fa-check" />Message Received!<br />
                </div>
                </div>
                <aside className="four columns footer-widgets">
                <div className="widget widget_contact">
                    <h4>Address and Phone</h4>
                    <p className="address">
                    {cvData.name}<br />
                    {cvData.address1} <br />
                    {cvData.address2}<br />
                    <span>{cvData.phoneNumber}</span>
                    </p>
                </div>
                </aside>
            </div>
            </section>        
        }
      </React.Fragment>
    );
  }
}