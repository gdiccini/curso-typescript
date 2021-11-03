// Exercício 1 - Classe
class Motorcycle {
  protected name: string;
  protected _speed: number = 0;

  constructor(name: string) {
    this.name = name;
  }

  public changeSpeed(delta: number): number {
    this._speed += delta;
    if (this._speed < 0) this._speed = 0;
    return this._speed;
  }

  public honk(): void {
    console.log('Tooooooooooooooot!')
  }

  get speed(): number {
    return this._speed;
  }
}

var moto = new Motorcycle('Ducati')
console.log('moto', moto)
moto.honk()
console.log(moto.speed)
moto.changeSpeed(30)
console.log(moto.speed)

// Exercício 2 - Herança
abstract class Object2D {
  // protected _base: number = 0;
  // protected _height: number = 0;

  abstract area(): number;

  constructor(public _base: number, public _height: number) {}

  set base(value: number) {
    this._base = value
  }

  get base(): number {
    return this._base;
  }

  set height(value: number) {
    this._height = value
  }

  get height(): number {
    return this._height;
  }
}

class Rectangle extends Object2D {
  public area(): number {
    return this._height * this._base;
  }
}

var reactangle = new Rectangle(5, 7);

console.log(reactangle.area())

// Exercício 3 - Getters & Setters
class Estagiario {
  private _firstName: string = '';

  get firstName(): string { return this._firstName; }
  set firstName(name: string) { this._firstName = name }
}
const estagiario = new Estagiario();
console.log(estagiario.firstName)
estagiario.firstName = 'Le'
console.log(estagiario.firstName)
estagiario.firstName = 'Leonardo'
console.log(estagiario.firstName)