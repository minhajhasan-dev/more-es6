class TeamMember {
  name;
  designation = "Support Web Dev";
  address = "BD";
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
}

class Support extends TeamMember {
  groupSupportTime;
  constructor(name, address, time) {
    super(name, address);
    this.groupSupportTime = time;
  }
  startSession() {
    console.log(this.name, "start a support session");
  }
}
class StudentCare extends TeamMember {
  buildARoutine(student) {
    console.log(this.name, "Build a routine for", student);
  }
}
class NeptuneDev extends TeamMember {
  codeEditor;
  constructor(name, address, editor) {
    super(name, address);
    this.codeEditor = editor;
  }
  releaseApp(version) {
    console.log(this.name, "release app version", version);
  }
}

const aamir = new Support("Aamir Khan", "Bangladesh", 11);
const salman = new Support("Salman Khan", "Dubai", 04);
const sharukh = new Support("Sharukh Khan", "Dubai", 9);
const akshay = new Support("Akshay Kumar", "Dubai", 11);

const alia = new StudentCare("Alia Bhatt", "Mumbai");
const ash = new NeptuneDev("Ash", "Mumbai", "Android Studio");
ash.releaseApp("1.4.5");
console.log(ash);
