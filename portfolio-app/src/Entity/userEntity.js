class UserEntity {
  static data = {
    users: [
      { id: 1, name: 'Rishabh Aggarwal', alias: 'iAmRishabh', website: 'https://www.rishabhaggarwal.in', github: 'www.github.com/rishcodelib', linkedin: 'www.linkedin.com/in/iamrishabhh' }
    ]
  };

  static getUser(id) {
    return this.data.users.find(user => user.id === id);
  }
}

export default UserEntity;