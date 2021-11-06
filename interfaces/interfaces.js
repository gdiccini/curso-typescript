"use strict";
function helloPerson(person) {
    console.log('Olá, ' + person.name);
}
;
function changeName(person) {
    person.name = 'Joana';
}
const person = {
    name: 'John',
    age: 34,
    hello(lastName) {
        console.log('Ola, meu nome é' + this.name + lastName);
    }
};
// helloPerson(person)
// changeName(person)
// helloPerson(person)
person.hello('Skywalker');
// helloPerson({ name: 'Giovani', age: 32, male: true });
// Classes com interfaces
class Client {
    constructor() {
        this.name = '';
        this.lastPurchase = new Date();
    }
    hello(lastName) {
        console.log('Ola, meu nome é' + this.name + lastName);
    }
}
let pow;
pow = function (base, exp) {
    return Math.pow(base, exp);
};
class RealA {
    a() { }
}
class RealAB {
    a() { }
    b() { }
}
class RealABC {
    a() { }
    b() { }
    c() { }
}
class AbstractABD {
    a() { }
    b() { }
}
