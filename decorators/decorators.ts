function logarClasse(construtor: Function) {
  console.log(construtor);
}

function decoratorVazio(_: Function) {}

function logarClasseSe(valor: boolean) {
  return valor ? logarClasse : decoratorVazio
}

// @logarClasse
// @logarClasseSe(true)
@logarObjeto
class Eletrodomestico {
  constructor() {
    console.log('novo....')
  }
}

type Construtor = { new(...args: any[]): {} }

function logarObjeto(construtor: Construtor) {
  return class extends construtor {
    constructor(...args: any[]) {
      console.log('Antes...')
      super(...args)
      console.log('Depois...')
    }
  }
}

interface Eletrodomestico2 {
  imprimir?(): Function
}

@imprimivel
class Eletrodomestico2 {
  constructor() {
    console.log('novo....')
  }
}

function imprimivel(construtor: Function) {
  construtor.prototype.imprimir = function() {
    console.log(this)
  }
}

const eletro = new Eletrodomestico2()
eletro.imprimir && eletro.imprimir()

// Decorator de método
class ContaCorrente {
  private saldo: number

  constructor(saldo: number) {
    this.saldo = saldo
  }

  @congelar
  sacar(valor: number) {
    if(valor <= this.saldo) {
      this.saldo -= valor
      return true
    } else {
      return false
    }
  }

  @congelar
  getSaldo() {
    return this.saldo
  }
}

const cc = new ContaCorrente(10000);
cc.sacar(5000);
console.log(cc.getSaldo());

// cc.getSaldo = function() {
//   return this['saldo'] + 8000
// }
// console.log(cc.getSaldo());

// Object.Freeze()
function congelar(alvo: any, nomeMetodo: string, descritor: PropertyDescriptor) {
  console.log(alvo)
  console.log(nomeMetodo)
  descritor.writable = false
}

// decorator de atributo
// function naoNegativo(alvo: any)