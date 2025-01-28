
class Based {
  name;

  constructor (name) {
    this.name = name
  }

  print(name) {
    console.log("name: " + this.name);
  }
}

class Child extends Based {

  constructor () {
    super("oussama");
  }

  hello() {
    super.print();
  }
}

let child = new Child();

child.hello();
