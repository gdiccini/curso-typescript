interface Human {
  name: string
  age?: number
  [prop: string]: any
  hello(lastName: string): void
  changeName?(lastName: string): void
}

function helloPerson(person: Human) {
  console.log('Olá, ' + person.name);
};

function changeName(person: Human) {
  person.name = 'Joana';
}

const person: Human = {
  name: 'John',
  age: 34,
  hello(lastName: string) {
    console.log ('Ola, meu nome é' + this.name + lastName);
  }
}

// helloPerson(person)
// changeName(person)
// helloPerson(person)

person.hello('Skywalker')

// helloPerson({ name: 'Giovani', age: 32, male: true });

// Classes com interfaces

class Client implements Human {
  name: string = '';
  lastPurchase: Date = new Date();

  hello(lastName: string) {
    console.log ('Ola, meu nome é' + this.name + lastName);
  }
}

// Interface Função

interface FunctionCalc {
  (a: number, b: number): number
}

let pow: FunctionCalc;

pow = function(base: number, exp: number): number {
  return base ** exp;
}

// Herança
interface A {
  a(): void
}

interface B {
  b(): void
}

interface ABC {
  c(): void
}

class RealA implements A {
  a(): void {}
}

class RealAB implements A, B {
  a(): void {}
  b(): void {}
}

class RealABC implements ABC {
  a(): void {}
  b(): void {}
  c(): void {}
}

abstract class AbstractABD implements A, B {
  a(): void {}
  b(): void {}
  abstract d(): void
}