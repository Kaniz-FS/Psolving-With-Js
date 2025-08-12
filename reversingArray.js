// Reverse an array with "unshift" keyword
const num = [3, 27, 59, 47, 62, 90];

const reverse = [];
for (let i = 0; i < num.length; i++) {
  console.log(num[i]);
  reverse.unshift(num[i]);
}
console.log(reverse);

// Reverse an array with "reverse" method
const topology = ["Mesh", "Star", "Bus", "Hybrid"];
topology.reverse();
console.log(topology);
