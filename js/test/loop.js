let name = "oussama";
let array = ["ezzaou", 10, 20];

// is defined like dict in python
let person = {
  age: 29,
  name: "oussama",
};

console.log("=========== array ============");
for (index in array) {
  console.log(array[index]);
}

console.log("=========== object ============");
for (attr in person) {
  console.log(attr + ": " + person[attr]);
}

console.log("=========== iterable ============");
for (index in name) {
  console.log(name[index]);
}
