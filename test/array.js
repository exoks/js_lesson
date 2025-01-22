
arr1 = [
  "name",
  20,
  0,
]

object = {
  name: "oussama",
  age: 20
};

console.log("===== Array: =====");
for (index in arr1) {
  console.log(`arr[${index}] = ${arr1[index]}`);
}

console.log(`=> toString(): ${arr1.toString()}`);
console.log(`=> join(): ${arr1.join('|')}`);

for (key in object) {
  console.log("property: " + object[key]);
}
