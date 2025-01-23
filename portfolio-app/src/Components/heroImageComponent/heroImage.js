import React from 'react';
import Social from '../socialComponent/social.js'
import './heroImage.css';

// import image from '../../Assets/images/background.jpeg'

function heroImage() {
  return <section className='heroImage'>
    <div className="masterContent">
      <div className="user_image">
      </div>
      <div className="row ">
        <div className="col-md-12">
          <div className="headText ">
            <h1 className="greetings"> Hello, I'm </h1>
            <h1 className="name caveat">
              Rishabh Aggarwal
            </h1>
            <div className="auto-typer">
              <span className="typer typer-style" id="main" data-words="Web Developer,Web Designer" data-delay="100"
                data-deleteDelay="1000"></span>
              <span className="cursor" data-owner="main"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Social />
  </section >

}

export default heroImage;