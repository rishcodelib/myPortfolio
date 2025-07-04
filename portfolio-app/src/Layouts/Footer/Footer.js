import React from 'react';
import './footer.css';
import YtChannel from '../../Components/ytChannelComponent/ytChannel';
import { MUSIC_INSTA_LINK, MUSIC_INSTA_NAME, TRAVEL_INSTA_LINK, TRAVEL_INSTA_NAME, CODE_INSTA_NAME, CODE_INSTA_LINK, LINKEDIN, GITHUB, SNAPCHAT, INSTAGRAM, TWITTER, GMAIL, TELEGRAM } from '../../constants';
function Footer() {
  return (
    <footer className='footer'>

      <div className="row">


        <YtChannel />

        <div className='col-md-4 my-2 '>
          <ul className="list-unstyled d-none d-md-block">

            <li>  <a href={MUSIC_INSTA_LINK} target="_blank" rel="noopener noreferrer" className="text-dark p-2 text-decoration-none" >
              <i className="fa-brands fa-instagram"></i>  {MUSIC_INSTA_NAME} </a></li>
          </ul>
        </div>


        <div className='col-md-4 my-2'>
          <ul className="list-unstyled d-none d-md-block ">

            <li> <a href={CODE_INSTA_LINK} target="_blank" rel="noopener noreferrer" className="text-dark p-2 text-decoration-none" >
              <i className="fa-brands fa-instagram"></i>  {CODE_INSTA_NAME} </a></li>
          </ul>
        </div>
        <div className='col-md-4 my-2'>
          <ul className="list-unstyled d-none d-md-block">
            <li>  <a href={TRAVEL_INSTA_LINK} target="_blank" rel="noopener noreferrer" className="text-dark p-2 text-decoration-none" >
              <i className="fa-brands fa-instagram"></i> {TRAVEL_INSTA_NAME} </a></li>
          </ul>
        </div>
        <div className='col-md-12 my-2'> <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="text-dark p-2 text-decoration-none" ><i className="fa-brands fa-linkedin-in "></i></a> |
          <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="text-dark p-2 text-decoration-none"><i className="fa-brands fa-github "></i></a>|
          <a href={TWITTER} target="_blank" rel="noopener noreferrer" className="text-dark p-2 text-decoration-none"><i className="fa-brands fa-x-twitter "></i></a>|
          <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="text-dark p-2 text-decoration-none"><i className="fa-brands fa-instagram "></i></a>|
          <a href={SNAPCHAT} target="_blank" rel="noopener noreferrer" className="text-dark p-2 text-decoration-none"><i className="fa-brands fa-snapchat "></i></a>|
          <a href={GMAIL} target="_blank" rel="noopener noreferrer" className="text-dark p-2 text-decoration-none"><i className="fa-regular fa-envelope "></i></a>|
          <a href={TELEGRAM} target="_blank" rel="noopener noreferrer" className="text-dark p-2 text-decoration-none"><i className="fa-brands fa-telegram "></i></a>
          <script async src="https://www.instagram.com/embed.js"></script>
          <hr className='divider' />
        </div>
        <div className="text">&copy; {new Date().getFullYear()} Rishabh Aggarwal. All rights reserved.
        </div>
      </div>
    </footer >

  );
}

export default Footer;