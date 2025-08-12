//Objects are non-primitive because they can store multiple properties and values in single structure, where primitive value holds just one value at a time; like- number , string , boolean etc.

// Declaring object with properties and values
const car = {
  //properties: "values",

  brand: "Toyota",
  model: "Corolla",
  year: 2022,
  color: "white",
  isElectric: false,
};
console.log(car);

const course = {
  name: "System Analysis and Design",
  code: "CSE-317",
  faculty: "Shampa Banik",
  exam: {
    name: "Mid-Term",
    year: 2025,
    marks: 30,
  },
};
console.log(course);
