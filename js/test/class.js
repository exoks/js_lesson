

// use get & set functions
class Person {
  name;
  age;

  constructor (name = "oussama", age = 0) {
    this.name = name;
    this.age = age;
  }

  print() {
    console.log("name: " + this.name);
    console.log("age: " + this.age);
  }
}

obj = new Person();
obj.print();

// use get & set keywords
class Test {
  #name;

  get name() {
    return this.#name;
  }

  set name(name) {
    this.#name = name;
  }
}

test = new Test();
test.name = "oussama"

console.log("test.name = " + test.name);
