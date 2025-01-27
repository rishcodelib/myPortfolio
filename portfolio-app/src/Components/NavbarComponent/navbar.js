import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import '../../Assets/fonts/Caveat/caveat.css'; // Import the custom font CSS

import UserEntity from '../../Entity/userEntity';
function Navbar() {

  const root = UserEntity.getUser(1);

  const [offset, setOffset] = useState(0);
  let fullUrl = window.location.pathname;
  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  let classStr = "navbar-light bg-light";

  if (offset > 200 && (fullUrl === '/' || fullUrl === '/home')) {
    classStr = "navbar-light bg-light fixed-top ";

  } else if (offset < 200 && (fullUrl === '/' || fullUrl === '/home')) {
    classStr = "navbar-dark bg-transparent fixed-top ";
  } else {
    classStr = "navbar-light bg-light ";
  }

  return <nav className={'navbar navbar-expand-lg ' + classStr} >
    <div className="container">
      <Link className="navbar-brand island " to='/'><h1 className="display-6">{root.alias}</h1></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to="/" className="nav-link active" aria-current="page" >
              Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-link" >
              Projects</Link>
          </li>

          <li className="nav-item">
            <Link to="/contact" className="nav-link " tabIndex="-1" aria-disabled="false">Contact</Link>
          </li>
          {/* <li className="nav-item">
            <Link to="/RishhiiiMusic" className="nav-link " tabIndex="-1" aria-disabled="false">RishhiiiMusic <i className="fa-brands fa-youtube fa-xl text-danger"></i></Link>
          </li> */} 

        </ul>

      </div>
    </div>
  </nav >;
}

export default Navbar;