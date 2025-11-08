import React, { Component } from 'react';
import { TRAVEL_YT_LINK, MUSIC_YT_LINK, CODE_YT_LINK, MUSIC_INSTA_LINK, MUSIC_INSTA_NAME, CODE_INSTA_NAME, CODE_INSTA_LINK, TRAVEL_INSTA_LINK, TRAVEL_INSTA_NAME, MUSIC_YT_NAME, CODE_YT_NAME, TRAVEL_YT_NAME } from '../../constants';
export class YtChannel extends Component {
  constructor(props) {
    super(props);
    // Fetch user data based on user ID (in this case, ID 1)
    this.state = {

      loading: false
    };
  }
  makeWithBold(name) {
    const parts = name.split('With');
    if (parts.length === 2) {
           
      return (
        <>
          {parts[0]}<b>With</b>{parts[1]}
        </>
      );
    }
    name = (<span>{parts[0]}<b>With</b>{parts[1]}</span>);
    console.log("name", name);
    return name;
  }

  render() {
    return (
      <div className='yt-channels'>
        <div className=''>
          <div className='row'>
            <div className='col-md-4'>
              <div className="">
                <p className="fs-5 text-center fw-lighter"> <a href={MUSIC_YT_LINK} target="_blank" rel="noopener noreferrer" className='text-decoration-none text-black '>  <i className="fa-brands fa-youtube fa-xl text-danger"></i> {MUSIC_YT_NAME}</a>
                </p>
                <ul className="list-unstyled d-sm-none d-xs-block">

                  <li> <a href={MUSIC_INSTA_LINK} target="_blank" rel="noopener noreferrer" className="text-dark p-2 text-decoration-none" >
                    <i className="fa-brands fa-instagram"></i>  {MUSIC_INSTA_NAME} </a></li>
                </ul>
              </div>
            </div>
            <div className='col-md-4'>
              <div className="">
                <p className="fs-5 text-center fw-lighter"> <a href={CODE_YT_LINK} target="_blank" rel="noopener noreferrer" className='text-decoration-none text-black '>  <i className="fa-brands fa-youtube fa-xl text-danger"></i> {CODE_YT_NAME}</a>
                </p>
                <ul className="list-unstyled d-sm-none d-xs-block ">

                  <li> <a href={CODE_INSTA_LINK} target="_blank" rel="noopener noreferrer" className="text-dark p-2 text-decoration-none" >
                    <i className="fa-brands fa-instagram"></i>  {CODE_INSTA_NAME} </a></li>
                </ul>
              </div>
            </div>
            <div className='col-md-4'>
              <div className="">
                <p className="fs-5 text-center fw-lighter"> <a href={TRAVEL_YT_LINK} target="_blank" rel="noopener noreferrer" className='text-decoration-none text-black '>  <i className="fa-brands fa-youtube fa-xl text-danger"></i> {TRAVEL_YT_NAME}</a>
                </p>
                <ul className="list-unstyled d-sm-none d-xs-block">
                  <li>  <a href={TRAVEL_INSTA_LINK} target="_blank" rel="noopener noreferrer" className="text-dark p-2 text-decoration-none" >
                    <i className="fa-brands fa-instagram"></i> {this.makeWithBold(TRAVEL_INSTA_NAME)} </a></li>
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




