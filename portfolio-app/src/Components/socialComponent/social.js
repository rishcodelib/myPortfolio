import React from "react";
import './social.css';
import { Link } from "react-router-dom";

function social() {
  return <div className="sc-media">
    <Link to="http://www.facbook.com/iam.rishabhhh" target="_blank" className="icon">
      {/* <i className="fa fa-facebook"></i> */}
      <i className="fa-brands fa-facebook fa-xl"></i>
    </Link>
    <Link to="http://www.instagram.com/iam.rishhiii" target="_blank" className="icon">
      <i className="fa-brands fa-instagram fa-xl"></i>
    </Link>
    <Link to="http://www.twitter.com/im_rishabhh" target="_blank" className="icon">
      {/* <i className="fa fa-twitter"></i> */}
      <i className="fa-brands fa-x-twitter fa-xl"></i>
    </Link>
    <Link to="http://www.youtube.com/rishhiii.music" target="_blank" className="icon">
      <i className="fa-brands fa-youtube"></i>
    </Link>
    <Link to="http://www.linkedin.com/in/iamrishabhh" target="_blank" className="icon">
      {/* <i className="fa fa-linkedin"></i> */}
      <i className="fa-brands fa-linkedin-in fa-xl"></i>
    </Link>
    <Link to="https://github.com/rishcodelib" target="_blank" className="icon">
      {/* <i className="fa fa-github"></i> */}
      <i className="fa-brands fa-github fa-xl"></i>
    </Link>
  </div>;
}

export default social