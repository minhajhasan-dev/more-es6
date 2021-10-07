const numbers = [5, 13, 17, 62, 77, 23, 1, 3, 5];
const bigNumbers = numbers.filter((number) => number > 20);
const smallNumbers = numbers.filter((number) => number < 10);
// console.log(bigNumbers);
// console.log(smallNumbers);
const products = [
  { name: "water bottle", price: 50, color: "yellow" },
  { name: "mobile phone", price: 15000, color: "black" },
  { name: "smart watch", price: 3000, color: "black" },
  { name: "sticky note", price: 30, color: "pink" },
  { name: "water glass", price: 3, color: "white" },
];
const expensive = products.filter((product) => product.price > 100);
// console.log(expensive);
const blackDiamond = products.filter((product) => product.color == "black");
// console.log(blackDiamond);
const whiteFind = products.find((product) => product.color == "black");
console.log(whiteFind);
