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

//Dot and Third bracket notation to access(get) and update(set) properties

// Accessing With Dot
console.log(car.color);
console.log(course.faculty);
//Accessing With Third Bracket
console.log(car["color"]);
console.log(course["faculty"]);

//Updating the values of properties
car.color = "Black";
console.log(car);

course["faculty"] = "Shampa";
console.log(course);

//How to get the properties only with funtion - object.keys()

const prop = Object.keys(car);
console.log(prop);

//How to get the values only with funtion - object.values()

const value = Object.values(course);
console.log(value);
