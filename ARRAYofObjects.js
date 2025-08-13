//How to access objects in array
const faculty = [
  { name: "Shampa", department: "CSE", incharge: "sec-2", room: 302 },
  { name: "Nahid", department: "EEE", incharge: "sec-4", room: 603 },
  { name: "Mahbub", department: "CIVIL", incharge: "sec-6", room: 502 },
];
console.log(faculty);
console.log(faculty[1]);
console.log(faculty[0].incharge);

//Accessing with for loop
for (const facul of faculty) {
  console.log(facul.name, facul.department);
}

//2D ARRAY
