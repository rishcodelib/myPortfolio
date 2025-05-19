class UserEntity {
  static data = {
    users: [
      {
        id: 1,
        name: 'Rishabh Aggarwal',
        alias: 'iAmRishabh',
        website: 'https://www.rishabhaggarwal.in',
        github: { link: 'https://github.com/rishcodelib', logo: 'fa-github' },
        linkedin: { link: 'http://www.linkedin.com/in/iamrishabhh', logo: 'fa-linkedin-in' },
        instagram: { link: 'http://www.instagram.com/RishhiiiTheExplorer', logo: 'fa-instagram' },
        twitter: { link: 'http://www.twitter.com/im_rishabhh', logo: 'fa-x-twitter' },
        // youtube: { link: 'http://www.youtube.com/rishhiii.music', logo: 'fa-youtube' },
      }
    ]
  };

  static getUser(id) {
    return this.data.users.find(user => user.id === id);
  }
}

export default UserEntity;