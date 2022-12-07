class Validator {
  constructor() {
    this.name_re = /[A-Za-z]{2,25}/;
    this.email_re = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}/;
    this.password_re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  }
  name(value, label) {
    if (this.name_re.test(value)) {
      return value;
    }
    throw `Invalid ${label ? label : "Name"}`;
  }
  email(value) {
    if (this.email_re.test(value)) {
      return value;
    }
    throw "Invalid Email";
  }
  password(value) {
    if (this.password_re.test(value)) {
      return value;
    }
    throw "Weak Password! Must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character";
  }
  match(val1, val2) {
    if (val1 === val2) {
      return val1;
    }
    throw "Passwords do not match";
  }
  age(value) {
    value = parseInt(value);
    if (value < 0 || value > 120) {
      throw "Invalid Age";
    }
    return value;
  }
}

export default new Validator();
