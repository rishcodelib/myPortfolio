import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  return <nav class="navbar navbar-expand-lg navbar-lilght bg-light fixed-top ">
    <div class="container-fluid">
      <Link class="navbar-brand" to="https://www.rishabhaggarwal.in">iAmRishabh</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Link to="/" class="nav-link active" aria-current="page" >
              Home</Link>
          </li>
          <li class="nav-item">
            <Link to="/projects" class="nav-link" >
              Projects</Link>
          </li>
          {/* <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="/home" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="/home">Action</a></li>
              <li><a class="dropdown-item" href="/home">Another action</a></li>
              <li><hr class="dropdown-divider"></hr></li>
              <li><a class="dropdown-item" href="/home">Something else here</a></li>
            </ul>
          </li> */}
          <li class="nav-item">
            <Link to="/contact" class="nav-link " tabindex="-1" aria-disabled="false">Contact</Link>
          </li>

        </ul>
        {/* <!-- <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> --> */}
      </div>
    </div>
  </nav>;
}

export default Navbar;