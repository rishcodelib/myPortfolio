import React, { useEffect } from 'react';


const LinkedInBadge = () => {
  useEffect(() => {
    const id = 'linkedin-badge-script';
    let added = false;
    if (!document.getElementById(id)) {
      const script = document.createElement('script');
      script.id = id;
      script.src = 'https://platform.linkedin.com/badges/js/profile.js';
      script.async = true;
      script.defer = true;
      script.type = 'text/javascript';
      document.body.appendChild(script);
      added = true;
    }

    return () => {
      if (added) {
        const s = document.getElementById(id);
        if (s && s.parentNode) s.parentNode.removeChild(s);
      }
    };
  }, []);

  return (
    <div>
      {/* Paste your specific badge HTML code here */}
      <div className="text-center">
        <div
          className="badge-base LI-profile-badge"
          data-locale="en_US"
          data-size="large"
          data-theme="light"
          data-type="Vertical"
          data-vanity="iamrishabhh"
          data-version="v1"
        >
        </div>
      </div>
    </div>

  );
};

export default LinkedInBadge;
