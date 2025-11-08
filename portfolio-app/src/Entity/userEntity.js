import { ALIAS, FIRST_NAME, GITHUB, LAST_NAME, LINKEDIN, TRAVEL_INSTA_LINK, TWITTER, WEBSITE } from "../constants";

class UserEntity {
  static data = {
    users: [
      {
        id: 1,
        name: FIRST_NAME + " " + LAST_NAME,
        alias: ALIAS,
        website: WEBSITE,
        github: { link: GITHUB, logo: 'fa-github' },
        linkedin: { link: LINKEDIN, logo: 'fa-linkedin-in' },
        instagram: { link: TRAVEL_INSTA_LINK, logo: 'fa-instagram' },
        twitter: { link: TWITTER, logo: 'fa-x-twitter' },
        // youtube: { link: 'http://www.youtube.com/rishhiii.music', logo: 'fa-youtube' },
      }
    ]
  };

  static getUser(id) {
    return this.data.users.find(user => user.id === id);
  }
}

export default UserEntity;