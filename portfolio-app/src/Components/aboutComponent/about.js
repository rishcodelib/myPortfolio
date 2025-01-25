import React from "react";
import "./about.css";
import UserEntity from "../../Entity/userEntity";

function about() {
  const user = UserEntity.getUser(1);
  return <section className="about-me " id="about">
    <div className="container">
      {/* <!-- <hr className="sc-content"> --> */}
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
        {/* <!-- <div className="col-md-4 ">
					<div className="usr-img ">
						<img src="./assets/images/no_image.png" className="img-thumbnail ">
					</div>
				</div> --> */}
        <div className="col-md-12">
          <div className="sc-Head">
            <div className="sub-Heading mb-1">
              Software Developement Engineer
            </div>
          </div>
          <div className="sub-Content">


            <p className="mb-0"> I am a Full Stack Developer presently working in <a className="company"
              href="https://www.lumen.com">Lumen
              Technologies</a> as Software Developent Engineer-I. I am passionate for programing & new emerging
              technologies. </p>
            <p> With 5+ Years of experience in IT-Industry. I have developed numerous Web-Application & Websites for the
              different clients. I am presently located in Bengaluru, Karnataka. </p>
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

    <i className="fa fa-leetcode" aria-hidden="true"></i>
  </section>
}


export default about 