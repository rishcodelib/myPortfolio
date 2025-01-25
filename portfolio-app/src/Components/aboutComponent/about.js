import React from "react";
import "./about.css";

function about() {
  let subHeading = "Software Developement Engineer";
  return <section className="about-me " id="about">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="sc-head ">
            <div className="Heading display-1">
              About Me
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="sc-Head">
            <div className="sub-Heading mb-1">
              {subHeading}
            </div>
          </div>

          <div className="sub-Content">
            <p className="mb-0"> I am a dedicated Full Stack Developer currently employed at <a className="company"
              href="https://www.lumen.com">Lumen  </a> Technologies India Pvt. Ltd. as a Software Development Engineer-I. My passion lies in programming and exploring new and emerging technologies. With over 5 years of experience in the IT industry, I have successfully developed numerous web applications and websites for a diverse range of clients. My expertise spans across various technologies, enabling me to deliver high-quality solutions tailored to client needs. I am currently based in Bengaluru, Karnataka. </p>
          </div>

          <div className="row">
            <div className="col-md-8">
              <app-skill-bar></app-skill-bar>
            </div>
            <div className="col-md-4 pt-5">
              <a className="btn btn-primary mx-2 " href="/resume"> Request Resume</a>
              <a className="btn btn-secondary " href="/projects"> Project Catalog</a>
            </div>
          </div>
        </div>
      </div>

    </div>

  </section>
}


export default about 