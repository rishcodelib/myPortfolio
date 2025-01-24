export class Project {
  firstName;
  lastName;
  email;
  password;
  contact;

  constructor(
    firstName,
    lastName,
    email,
    password,
    contact
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.contact = contact;
  }
  set setFirstName(firstName) {
    this.firstName = firstName;
  }
  get getFirstName() {
    return this.firstName;
  }
  get getLastName() {
    return this.lastName;
  }
  get getContact() {
    return this.contact;
  }
  get getEmail() {
    return this.email;
  }

  set setLastName(lastName) {
    this.lastName = lastName;
  }

  set setEmail(email) {
    this.email = email;
  }

  set setPassword(password) {
    this.password = password;
  }

  set setContact(contact) {
    this.contact = contact;
  }
}

