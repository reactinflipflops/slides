class Person {
  name;
  age;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  birthday = () => {
    console.log(`Happy B-Day ${this.name}`);
    this.age = this.age + 1;
  }
}
