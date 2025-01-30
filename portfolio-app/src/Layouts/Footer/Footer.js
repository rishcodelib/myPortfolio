import React from 'react';
import './footer.css';
import YtChannel from '../../Components/ytChannelComponent/ytChannel';

function Footer() {
  return (
    <footer className='footer'>

      <div className="row">

        <div className="container text-center">
          <YtChannel />
          <div className='col-md-12'>

          </div>
          <div className='col-md-12 my-2'> |<a href="https://www.linkedin.com/in/iamrishabhh" target="_blank" rel="noopener noreferrer" className="text-dark p-2 text-decoration-none" ><i className="fa-brands fa-linkedin-in "></i></a> |
            <a href="https://github.com/rishcodelib" target="_blank" rel="noopener noreferrer" className="text-dark p-2 text-decoration-none"><i className="fa-brands fa-github "></i></a>|
            <a href="https://twitter.com/im_rishabhh" target="_blank" rel="noopener noreferrer" className="text-dark p-2 text-decoration-none"><i className="fa-brands fa-x-twitter "></i></a>|
            <a href="https://www.youtube.com/@rishhiiimusic" target="_blank" rel="noopener noreferrer" className="text-dark p-2 text-decoration-none"><i className="fa-brands fa-youtube "></i></a>|
            <a href="http://www.instagram.com/iam.rishhiii" target="_blank" rel="noopener noreferrer" className="text-dark p-2 text-decoration-none"><i className="fa-brands fa-instagram "></i></a>|
            <a href="http://www.snapchat.com/" target="_blank" rel="noopener noreferrer" className="text-dark p-2 text-decoration-none"><i className="fa-brands fa-snapchat "></i></a>|
            <a href="http://www.google.com/" target="_blank" rel="noopener noreferrer" className="text-dark p-2 text-decoration-none"><i className="fa-brands fa-google "></i></a>|
            <a href="http://www.gmail.com/" target="_blank" rel="noopener noreferrer" className="text-dark p-2 text-decoration-none"><i className="fa-regular fa-envelope "></i></a>|
            <a href="http://www.telegram.com/" target="_blank" rel="noopener noreferrer" className="text-dark p-2 text-decoration-none"><i className="fa-brands fa-telegram "></i></a>|
          </div>
          <div className="text">&copy; {new Date().getFullYear()} Rishabh Aggarwal. All rights reserved.
          </div>
        </div>

      </div>
    </footer>

  );
}

export default Footer;