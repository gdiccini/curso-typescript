class Data {
  public dia: number
  public mes: number
  public ano: number

  constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
    this.dia = dia
    this.mes = mes
    this.ano = ano
  }
}

const birthday = new Data();
// console.log(birthday.mes)

// Aula 2 do módulo

class SmartDate {
    constructor(public dia: number = 1, public mes: number = 1, public ano: number = 1970) {}
}

const birthday2 = new SmartDate();
// console.log(birthday2.mes)

// Aula 3 modificadore de acesso
class Car {
  private actualSpeed: number = 0;

  constructor(public brand: string, public model: string, public maxSpeed: number = 0) {

  }

  protected changeSpeed(delta: number): number {
    const newSpeed = this.actualSpeed + delta;
    const validateSpeed = newSpeed >= 0 && newSpeed <= this.maxSpeed;

    if(validateSpeed) {
      this.actualSpeed = newSpeed;
    } else {
      this.actualSpeed = delta > 0 ? this.maxSpeed : 0;
    }

    return this.actualSpeed;
  }

  public speedUp(): number {
    return this.changeSpeed(5);
  }

  public speedDown(): number {
    return this.changeSpeed(-5);
  }
}

const car1= new Car('Ford', 'Ka', 185);

Array(50).fill(0).forEach(() => car1.speedUp());
// console.log(car1.speedUp());

Array(50).fill(0).forEach(() => car1.speedDown());
// console.log(car1.speedDown());

// Herança

class Ferrari extends Car {

  constructor(model: string, maxSpeed: number) {
    super('Ferrari', model, maxSpeed);
  }

  public speedUp(): number {
    return this.changeSpeed(20);
  }

  public speedDown(): number {
    return this.changeSpeed(-15);
  }
}

const f40 = new Ferrari('f40', 324);
// console.log(`${f40.brand} ${f40.model}`);
// console.log(f40.speedUp());
// console.log(f40.speedDown());

// Getters & Setters
class Person {
  private _age: number = 0;

  get age(): number {
    return this._age;
  }

  set age(value: number) {
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
  static PI: number = 3.1416

  static areaCirc(raio: number): number {
    return this.PI * raio * raio;
  }
}

// console.log(Mathematics.areaCirc(4));

// Classes abstratas

abstract class Calc {
  protected result: number = 0;

  abstract execute(...numbers: number[]): void;

  getResult(): number {
    return this.result;
  }
}

class Soma extends Calc {
  execute(...numbers: number[]): void {
    this.result = numbers.reduce((t, a) => t + a);
  }
}

class Multiply extends Calc {
  execute(...numbers: number[]): void {
    this.result = numbers.reduce((t, a) => t * a);
  }
}

let c1: Calc = new Soma();
c1.execute(2, 3, 4, 5);
console.log(c1.getResult());

c1 = new Multiply();
c1.execute(2, 3, 4, 5);
console.log(c1.getResult());

// Construtor privado e singleton
class Unic {
  private static instance: Unic = new Unic();
  private constructor() {};

  static getInstance() {
    return Unic.instance
  }

  now() {
    return new Date();
  }
}

// const wrongWay = new Unic(); Forma errada
console.log(Unic.getInstance().now());




// Atributos somente leitura
class Plane {
  public readonly model: string;

  constructor(model: string, public readonly prefix: string) {
    this.model = model;
  }
}

const plane1 = new Plane('Modelo de Avião', 'Prefixo de Avião');
console.log(plane1);