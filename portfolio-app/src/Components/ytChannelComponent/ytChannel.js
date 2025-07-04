import React, { Component } from 'react';
// import './social.css';
import { Link } from "react-router-dom";
import UserEntity from "../../Entity/userEntity";
import { TRAVEL_YT_LINK, MUSIC_YT_LINK, CODE_YT_LINK, MUSIC_INSTA_LINK, MUSIC_INSTA_NAME, CODE_INSTA_NAME, CODE_INSTA_LINK,TRAVEL_INSTA_LINK,TRAVEL_INSTA_NAME} from '../../constants';
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
        <div className=''>
          <div className='row'>
            <div className='col-md-4'>
              <div className="">
                <p className="fs-5 text-center fw-lighter"> <a href={MUSIC_YT_LINK} target="_blank" rel="noopener noreferrer" className='text-decoration-none text-black '>  <i className="fa-brands fa-youtube fa-xl text-danger"></i> Rishhiii.Music</a>
                </p>
                <ul className="list-unstyled d-sm-none d-xs-block">

                  <li>  <a href={MUSIC_INSTA_LINK} target="_blank" rel="noopener noreferrer" className="text-dark p-2 text-decoration-none" >
                    <i className="fa-brands fa-instagram"></i>  {MUSIC_INSTA_NAME} </a></li>
                </ul>
              </div>
            </div>
            <div className='col-md-4'>
              <div className="">
                <p className="fs-5 text-center fw-lighter"> <a href={CODE_YT_LINK} target="_blank" rel="noopener noreferrer" className='text-decoration-none text-black '>  <i className="fa-brands fa-youtube fa-xl text-danger"></i> Code<b>With</b>Rishhiii</a>
                </p>
                <ul className="list-unstyled d-sm-none d-xs-block ">

                  <li> <a href={CODE_INSTA_LINK} target="_blank" rel="noopener noreferrer" className="text-dark p-2 text-decoration-none" >
                    <i className="fa-brands fa-instagram"></i>  {CODE_INSTA_NAME} </a></li>
                </ul>
              </div>
            </div>
            <div className='col-md-4'>
              <div className="">
                <p className="fs-5 text-center fw-lighter"> <a href={TRAVEL_YT_LINK} target="_blank" rel="noopener noreferrer" className='text-decoration-none text-black '>  <i className="fa-brands fa-youtube fa-xl text-danger"></i> Rishhiii<b>The</b>Explorer</a>
                </p>
                <ul className="list-unstyled d-sm-none d-xs-block">
                  <li>  <a href={TRAVEL_INSTA_LINK} target="_blank" rel="noopener noreferrer" className="text-dark p-2 text-decoration-none" >
                    <i className="fa-brands fa-instagram"></i> {TRAVEL_INSTA_NAME} </a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default YtChannel;




