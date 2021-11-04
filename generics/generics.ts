function echo(objeto: any) {
  return objeto
}

console.log(echo('João').length)
console.log(echo(27).length)
console.log(echo({ name: 'João', age: 12 }))

// usando generics
function echoImproved<T>(objeto: T) {
  return objeto
}

console.log(echoImproved<number>(27))

console.log(echoImproved('João').length)
console.log(echoImproved(27))
console.log(echoImproved({ name: 'João', age: 12 }))

// Generics disponiveis na ap
const avaliacoes: Array<number> = [10, 9.3, 7.7];

avaliacoes.push(8.4)
// avaliacoes.push('5.5')

// Array
type People = { name: string, age: number }

function print<T extends number | string | People>(args: T[]) {
  args.forEach(element => console.log(element));
}

print([1, 2, 3]);
print<number>([1, 2, 3]);

print(['a', 'b', 'c', 'd', 'e']);
print<string>(['a', 'b', 'c', 'd', 'e']);

print([
  { name: 'Giovani', age: 28 },
  { name: 'Fernanda', age: 28 },
  { name: 'Maira', age: 28 },
]);
print<{ name: string, age: number }>([
  { name: 'Giovani', age: 28 },
  { name: 'Fernanda', age: 28 },
  { name: 'Maira', age: 28 },
]);

print<People>([
  { name: 'Giovani', age: 28 },
  { name: 'Fernanda', age: 28 },
  { name: 'Maira', age: 28 },
]);


// Funções com generics
type Echo = <T>(data: T) => T
const chamarEcho: Echo = echoImproved;
console.log(echoImproved<string>('Alguma coisa'))

// Classes com generics

// forma errada
class OperacaoBinaria {
  constructor(public operando1: any, public operando2: any) {}
  executar() {
    return this.operando1 + this.operando2;
  }
}

console.log(new OperacaoBinaria('Bom', 'dia').executar())
console.log(new OperacaoBinaria(3, 7).executar())
console.log(new OperacaoBinaria('Bom', 30).executar())
console.log(new OperacaoBinaria({ name: 'Giovani' }, null).executar())

// Forma mais utilizada
abstract class OperacaoBinaria2<T, R> {
  constructor(public operando1: T, public operando2: T) {}

  abstract executar(): R
}

class MinhaData {
  public dia: number
  public mes: number
  public ano: number

  constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
    this.dia = dia
    this.mes = mes
    this.ano = ano
  }
}

class DiferençaEntreDatas extends OperacaoBinaria2<Data, string> {
  getTime(data: Data): number {
    let { dia, mes, ano } = data
    return new Date(`${mes}/${dia}/${ano}`).getTime();
  }

  executar(): string {
    const t1 = this.getTime(this.operando1)
    const t2 = this.getTime(this.operando2)
    const diferença = Math.abs(t1 - t2)
    const dia = 1000 * 60 * 60 * 24
    return `${Math.ceil(diferença / dia)} dia(s)`
  }
}

const d1 = new MinhaData(1, 2, 2020)
const d2 = new MinhaData(5, 2, 2020)
console.log(new DiferençaEntreDatas(d1, d2).executar());



class SomaBinaria extends OperacaoBinaria2<number, number> {
  executar(): number {
    return this.operando1 + this.operando2;
  }
}

console.log(new SomaBinaria(3, 4).executar());