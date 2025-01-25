// filepath: /Users/rishabh/WorkSpaces/GitRepository/myPortfolio/portfolio-app/src/Entities/StaticEntity.js
class ResumeEntity {
  static data = {
    personalDetails: { id: 1, firstName: 'Rishabh', lastName: 'Aggarwal' },
    educationDetails: { id: 1, firstName: 'Rishabh', lastName: 'Aggarwal' },
    professionalDetails: { id: 1, firstName: 'Rishabh', lastName: 'Aggarwal' },
    contactDetails: { emailID: 'abc@example.com', contact: '123456789', address: 'India' }
  };

  static getPersonalDetails() {
    return this.data.personalDetails;
  }

  static getEducationDetails() {
    return this.data.educationDetails;
  }

  static getProfessionalDetails() {
    return this.data.professionalDetails;
  }

  static getContactDetails() {
    return this.data.contactDetails;
  }
}

export default ResumeEntity;