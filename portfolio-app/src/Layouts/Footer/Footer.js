import React from "react";
import './footer.css'
function Footer() {
  return <footer className="myfooter mt-4">
    <div className="row">
      <div className="col-md-12">
        <div className="container content text-center">
          <p className="display-7"> Portfolio By Rishabh Aggarwal | Bengaluru, India | 2.1.0 </p>
          {/* <!-- <a  href="/signin"> Signin</a> */}
          {/* | <a href="/signup"> Signup</a> </p> --> */}
        </div>
      </div>
    </div>
  </footer>
}

export default Footer;