import React, { Component } from 'react';
import './social.css';
import { Link } from "react-router-dom";
import UserEntity from "../../Entity/userEntity";

export class Social extends Component {
  constructor(props) {
    super(props);
    // Fetch user data based on user ID (in this case, ID 1)
    this.state = {
      user: UserEntity.getUser(1),
      loading: false
    };
  }

  render() {
    // Extract the social media data from the user object
    const { user } = this.state;

    // Only render the component if user data is available
    if (!user) {
      return <div>Loading...</div>;
    }

    return (
      <div className="sc-media">
        <div className="container">
          <div className="inside-container">
            <div className="row" >
              <div className='d-xs-none col-md-2 col-lg-2 col-xl-3 col-xxl-2'></div>
              {/* Iterate over the social media fields dynamically */}
              {Object.keys(user).map((key) => {
                // Skip irrelevant keys (id, name, alias, website)
                if (['id', 'name', 'alias', 'website'].includes(key)) return null;

                const social = user[key]; // Get the social media data (e.g., github, linkedin)
                return (
                  <div className="col-3 col-xs-2 col-sm-1 col-md-2  " key={key}>
                    <Link to={social.link.trim()} target="_blank" className="icon" rel="noopener noreferrer">
                      <i className={`fa-brands ${social.logo} fa-xl`}></i>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Social;
