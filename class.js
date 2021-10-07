class Support {
  name;
  designation = "Support Web Dev";
  address = "BD";
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
  startSession() {
    console.log(this.name, "start a support session");
  }
}

const aamir = new Support("Aamir Khan", "Bangladesh");
const salman = new Support("Salman Khan", "Dubai");
const sharukh = new Support("Sharukh Khan", "Dubai");
const akshay = new Support("Akshay Kumar", "Dubai");
aamir.startSession();
salman.startSession();
console.log(aamir, salman, sharukh, akshay);
// console.log(salman);
