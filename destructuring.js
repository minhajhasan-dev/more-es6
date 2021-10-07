const fish = {
  id: 58,
  name: "King Hilsha",
  price: 9000,
  phone: "01700000000",
  address: "Chandpur",
  dress: "silver",
};
// const phone = fish.phone;
// const price = fish.price;
// const dress = fish.dress;
// const id = fish.id;

// object destructuring method
const { phone, price, dress, id } = fish;

// console.log(phone);
// console.log(price);
// console.log(dress);
// console.log(id);

const company = {
  name: "GP",
  ceo: { id: 1, name: "ajmol", food: "fuchka" },
  web: {
    work: "website_development",
    employee: 22,
    framework: "react",
    tech: { first: "html", second: "css", third: "js" },
  },
};

// const work = company.web.work;
// const framework = company.web.framework;

const { work, framework } = company.web;
const { food } = company.ceo;
const { second, third } = company.web.tech;

console.log(work, framework, food, second, third);
