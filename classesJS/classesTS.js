"use strict";
class Data {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const birthday = new Data();
// console.log(birthday.mes)
// Aula 2 do módulo
class SmartDate {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const birthday2 = new SmartDate();
// console.log(birthday2.mes)
// Aula 3 modificadore de acesso
class Car {
    constructor(brand, model, maxSpeed = 0) {
        this.brand = brand;
        this.model = model;
        this.maxSpeed = maxSpeed;
        this.actualSpeed = 0;
    }
    changeSpeed(delta) {
        const newSpeed = this.actualSpeed + delta;
        const validateSpeed = newSpeed >= 0 && newSpeed <= this.maxSpeed;
        if (validateSpeed) {
            this.actualSpeed = newSpeed;
        }
        else {
            this.actualSpeed = delta > 0 ? this.maxSpeed : 0;
        }
        return this.actualSpeed;
    }
    speedUp() {
        return this.changeSpeed(5);
    }
    speedDown() {
        return this.changeSpeed(-5);
    }
}
const car1 = new Car('Ford', 'Ka', 185);
Array(50).fill(0).forEach(() => car1.speedUp());
// console.log(car1.speedUp());
Array(50).fill(0).forEach(() => car1.speedDown());
// console.log(car1.speedDown());
// Herança
class Ferrari extends Car {
    constructor(model, maxSpeed) {
        super('Ferrari', model, maxSpeed);
    }
    speedUp() {
        return this.changeSpeed(20);
    }
    speedDown() {
        return this.changeSpeed(-15);
    }
}
const f40 = new Ferrari('f40', 324);
// console.log(`${f40.brand} ${f40.model}`);
// console.log(f40.speedUp());
// console.log(f40.speedDown());
// Getters & Setters
class Person {
    constructor() {
        this._age = 0;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        if (value >= 0 && value <= 120) {
            this._age = value;
        }
    }
}
const person1 = new Person;
person1.age = 10;
// console.log(person1);
// Atributos e métodos estáticos
class Mathematics {
    static areaCirc(raio) {
        return this.PI * raio * raio;
    }
}
Mathematics.PI = 3.1416;
// console.log(Mathematics.areaCirc(4));
// Classes abstratas
class Calc {
    constructor() {
        this.result = 0;
    }
    getResult() {
        return this.result;
    }
}
class Soma extends Calc {
    execute(...numbers) {
        this.result = numbers.reduce((t, a) => t + a);
    }
}
class Multiply extends Calc {
    execute(...numbers) {
        this.result = numbers.reduce((t, a) => t * a);
    }
}
let c1 = new Soma();
c1.execute(2, 3, 4, 5);
console.log(c1.getResult());
c1 = new Multiply();
c1.execute(2, 3, 4, 5);
console.log(c1.getResult());
// Construtor privado e singleton
class Unic {
    constructor() { }
    ;
    static getInstance() {
        return Unic.instance;
    }
    now() {
        return new Date();
    }
}
Unic.instance = new Unic();
// const wrongWay = new Unic(); Forma errada
console.log(Unic.getInstance().now());
// Atributos somente leitura
class Plane {
    constructor(model, prefix) {
        this.prefix = prefix;
        this.model = model;
    }
}
const plane1 = new Plane('Modelo de Avião', 'Prefixo de Avião');
console.log(plane1);
