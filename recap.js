// let and const
const girlfriend = "sima islam";
let phone = "iphone 15";
phone = "samsung galaxy s31";
// default parameter
// spread operator
function maxNumber(array = []) {
  const max = Math.max(...array);
  return max;
}
const biggest = maxNumber();
console.log(biggest);
// template string
const myNotes = `I am mojnu of ${girlfriend}. I have a ${phone}`;
console.log(myNotes);

// arrow function
const square = (x) => x * x;
console.log(square(8));
