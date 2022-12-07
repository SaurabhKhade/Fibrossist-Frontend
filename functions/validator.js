class Validator {
  constructor() {
    this.name_re = /[A-Za-z]{2,25}/;
    this.email_re = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}/;
    this.password_re =
      /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/;
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
    throw "Invalid Password";
  }
  match(val1, val2) {
    if (val1 === val2) {
      return val1;
    }
    throw "Passwords do not match";
  }
  age(value) {
    value = parseInt(value);
    if (age < 0 || age > 120) {
      throw "Invalid Age";
    }
    return value;
  }
}

export default new Validator();
