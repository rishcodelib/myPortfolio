import React from 'react';
import Social from '../socialComponent/social.js'
import './heroImage.css';

// import image from '../../Assets/images/background.jpeg'

function heroImage() {
  return <section className='heroImage'>
    <div className="masterContent">
      <div className="row ">
        <div className="offset-md-3 col-md-6">
          <div className="headText position-relative ">
            <h1 className="greetings"> Hello, I'm </h1>
            <h1 className="name caveat">
              Rishabh Aggarwal
            </h1>
            {/* <div className="auto-typer">
              <span className="typer typer-style" id="main" data-words="Web Developer,Web Designer" data-delay="100"
                data-deletedelay="1000"></span>
              <span className="cursor" data-owner="main"></span>
            </div> */}
          </div>
        </div>
      </div>
    </div>
    <Social />
  </section >

}

export default heroImage;