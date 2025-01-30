import React, { Component } from 'react';
// import './social.css';
import { Link } from "react-router-dom";
import UserEntity from "../../Entity/userEntity";

export class YtChannel extends Component {
  constructor(props) {
    super(props);
    // Fetch user data based on user ID (in this case, ID 1)
    this.state = {

      loading: false
    };
  }

  render() {


    return (
      <div className='yt-channels'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <div className="">
                <p className="fs-5 text-center fw-lighter"> <a href="https://www.youtube.com/@rishhiiimusic" target="_blank" rel="noopener noreferrer" className='text-decoration-none text-black '>  <i className="fa-brands fa-youtube fa-xl text-danger"></i> Rishhiii.Music</a>
                </p>
              </div>
            </div>
            <div className='col-md-6'>
              <div className="">
                <p className="fs-5 text-center fw-lighter"> <a href="https://www.youtube.com/@codewithrishhiii" target="_blank" rel="noopener noreferrer" className='text-decoration-none text-black '>  <i className="fa-brands fa-youtube fa-xl text-danger"></i> Code<b>With</b>Rishhiii</a>

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default YtChannel;




