import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="row">
        <div className="container text-center">
          <div className='col-sm-12'>
            <p>&copy; {new Date().getFullYear()} Rishabh Aggarwal. All rights reserved.
              <a href="https://www.linkedin.com/in/iamrishabhh" target="_blank" rel="noopener noreferrer" className="text-dark p-2 text-decoration-none" ><i className="fa-brands fa-linkedin-in "></i></a> |
              <a href="https://github.com/rishcodelib" target="_blank" rel="noopener noreferrer" className="text-dark p-2 text-decoration-none"><i className="fa-brands fa-github "></i></a>|
              <a href="https://twitter.com/im_rishabhh" target="_blank" rel="noopener noreferrer" className="text-dark p-2 text-decoration-none"><i className="fa-brands fa-x-twitter "></i></a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;