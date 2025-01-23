import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function Navbar() {

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

  if (offset > 200 && (fullUrl == '/' || fullUrl == '/home')) {
    classStr = "navbar-light bg-light ";

  } else if (offset < 200 && (fullUrl == '/' || fullUrl == '/home')) {
    classStr = "navbar-dark bg-transparent ";
  }

  return <nav className={'navbar navbar-expand-lg fixed-top ' + classStr} >
    <div className="container-fluid">
      <Link className="navbar-brand" to="https://www.rishabhaggarwal.in">iAmRishabh</Link>
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
          {/* <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/home" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="/home">Action</a></li>
              <li><a className="dropdown-item" href="/home">Another action</a></li>
              <li><hr className="dropdown-divider"></hr></li>
              <li><a className="dropdown-item" href="/home">Something else here</a></li>
            </ul>
          </li> */}
          <li className="nav-item">
            <Link to="/contact" className="nav-link " tabindex="-1" aria-disabled="false">Contact</Link>
          </li>

        </ul>
        {/* <!-- <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> --> */}
      </div>
    </div>
  </nav >;
}

export default Navbar;