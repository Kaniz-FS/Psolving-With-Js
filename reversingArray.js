const num = [3, 27, 59, 47, 62, 90];

const reverse = [];
for (let i = 0; i < num.length; i++) {
  console.log(num[i]);
  reverse.unshift(num[i]);
}
console.log(reverse);
