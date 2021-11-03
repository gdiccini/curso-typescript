"use strict";
// Exercício 1 - Classe
class Motorcycle {
    constructor(name) {
        this._speed = 0;
        this.name = name;
    }
    changeSpeed(delta) {
        this._speed += delta;
        if (this._speed < 0)
            this._speed = 0;
        return this._speed;
    }
    honk() {
        console.log('Tooooooooooooooot!');
    }
    get speed() {
        return this._speed;
    }
}
var moto = new Motorcycle('Ducati');
console.log('moto', moto);
moto.honk();
console.log(moto.speed);
moto.changeSpeed(30);
console.log(moto.speed);
// Exercício 2 - Herança
class Object2D {
    constructor(_base, _height) {
        this._base = _base;
        this._height = _height;
    }
    set base(value) {
        this._base = value;
    }
    get base() {
        return this._base;
    }
    set height(value) {
        this._height = value;
    }
    get height() {
        return this._height;
    }
}
class Rectangle extends Object2D {
    area() {
        return this._height * this._base;
    }
}
var reactangle = new Rectangle(5, 7);
console.log(reactangle.area());
// Exercício 3 - Getters & Setters
class Estagiario {
    constructor() {
        this._firstName = '';
    }
    get firstName() { return this._firstName; }
    set firstName(name) { this._firstName = name; }
}
const estagiario = new Estagiario();
console.log(estagiario.firstName);
estagiario.firstName = 'Le';
console.log(estagiario.firstName);
estagiario.firstName = 'Leonardo';
console.log(estagiario.firstName);
