function Person(firstname,lastname) {
    this.firstname = firstname,
    this.lastname = lastname
}
Person.prototype.greet = function() {
    console.log("Hello" + " " + this.firstname + " " + this.lastname + ", Age: "+this.age);
}
Person.prototype.age = null;

var pedro = new Person ("Pedro","Soares");
pedro.age=32;
pedro.greet();

var joao = new Person ("Joao", "Andrade");
joao.age=18;
joao.greet();

console.log(pedro.__proto__);
console.log(joao.__proto__);
console.log(pedro.__proto__ == joao.__proto__);