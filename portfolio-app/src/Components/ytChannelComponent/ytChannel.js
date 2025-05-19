import React, { Component } from 'react';
// import './social.css';
import { Link } from "react-router-dom";
import UserEntity from "../../Entity/userEntity";
import { TRAVEL_YT_LINK,MUSIC_YT_LINK,CODE_YT_LINK } from '../../constants';
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
                <p className="fs-5 text-center fw-lighter"> <a href={MUSIC_YT_LINK} target="_blank" rel="noopener noreferrer" className='text-decoration-none text-black '>  <i className="fa-brands fa-youtube fa-xl text-danger"></i> Rishhiii.Music</a>
                </p>
              </div>
            </div>
            <div className='col-md-6'>
              <div className="">
                <p className="fs-5 text-center fw-lighter"> <a href={CODE_YT_LINK} target="_blank" rel="noopener noreferrer" className='text-decoration-none text-black '>  <i className="fa-brands fa-youtube fa-xl text-danger"></i> Code<b>With</b>Rishhiii</a>
                </p>
              </div>
            </div>
            <div className='col-md-6 d-sm-none d-xs-block'>
              <div className="">
                <p className="fs-5 text-center fw-lighter"> <a href={TRAVEL_YT_LINK} target="_blank" rel="noopener noreferrer" className='text-decoration-none text-black '>  <i className="fa-brands fa-youtube fa-xl text-danger"></i> Rishhiii<b>The</b>Explorer</a>
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




