import React from "react";
import './contact.css';

function Contact() {
  return <div>
    <div className="container jumbotron">
      <div className="row ">
        <div className="col-md-12 text-center p-5">
          <h2 className="display-6"> Can I have your contact details ? </h2>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-4">
          <div className="pt-contact">
            <div className="pt-icon">
              <i className="fa fa-map-marker fa-2x" aria-hidden="true"> </i>
            </div>
            <div className="pt-content">
              <h6> Address</h6>

            </div>
          </div>
        </div>
        <div className="col-md-4 col-4">
          <div className="pt-contact">
            <div className="pt-icon">
              <i className="fa fa-envelope" aria-hidden="true"></i>
            </div>
            <div className="pt-content">
              <h6> Email ID</h6>

            </div>
          </div>
        </div>
        <div className="col-md-4 col-4">
          <div className="pt-contact">
            <div className="pt-icon">
              <i className="fa fa-phone" aria-hidden="true"></i>
            </div>
            <div className="pt-content">
              <h6> Contact</h6>

            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-12">
          <form >
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="first-name">First Name: </label> <br />
                <input id="first-name" type="text" className="form-control" formcontrolname="firstName" />
              </div>
              <div className="col-md-6">
                <label htmlFor="last-name">Last Name: </label> <br />
                <input id="last-name" type="text" className="form-control" formcontrolname="lastName" />
              </div>
              <div className="col-md-6">
                <label htmlFor="email">Email: </label> <br />
                <input id="email" type="email" className="form-control" formcontrolname="email" />
              </div>

              <div className="col-md-6">
                <label htmlFor="contact">Contact: </label> <br />
                <input id="contact" type="number" className=" form-control" formcontrolname="contact" />
              </div>
              <div className="col-md-12 mt-2 text-center">
                {/* <!-- <p>Complete the form to enable button.</p> --> */}
                <button type=" submit" className="btn btn-secondary" >Submit</button>

              </div>

            </div>

          </form>
        </div>
      </div >
    </div >
  </div >
}

export default Contact;