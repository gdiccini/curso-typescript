"use strict";
function echo(objeto) {
    return objeto;
}
console.log(echo('João').length);
console.log(echo(27).length);
console.log(echo({ name: 'João', age: 12 }));
// usando generics
function echoImproved(objeto) {
    return objeto;
}
console.log(echoImproved(27));
console.log(echoImproved('João').length);
console.log(echoImproved(27));
console.log(echoImproved({ name: 'João', age: 12 }));
// Generics disponiveis na ap
const avaliacoes = [10, 9.3, 7.7];
avaliacoes.push(8.4);
function print(args) {
    args.forEach(element => console.log(element));
}
print([1, 2, 3]);
print([1, 2, 3]);
print(['a', 'b', 'c', 'd', 'e']);
print(['a', 'b', 'c', 'd', 'e']);
print([
    { name: 'Giovani', age: 28 },
    { name: 'Fernanda', age: 28 },
    { name: 'Maira', age: 28 },
]);
print([
    { name: 'Giovani', age: 28 },
    { name: 'Fernanda', age: 28 },
    { name: 'Maira', age: 28 },
]);
print([
    { name: 'Giovani', age: 28 },
    { name: 'Fernanda', age: 28 },
    { name: 'Maira', age: 28 },
]);
const chamarEcho = echoImproved;
console.log(echoImproved('Alguma coisa'));
// Classes com generics
// forma errada
class OperacaoBinaria {
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
    executar() {
        return this.operando1 + this.operando2;
    }
}
console.log(new OperacaoBinaria('Bom', 'dia').executar());
console.log(new OperacaoBinaria(3, 7).executar());
console.log(new OperacaoBinaria('Bom', 30).executar());
console.log(new OperacaoBinaria({ name: 'Giovani' }, null).executar());
// Forma mais utilizada
class OperacaoBinaria2 {
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
}
class MinhaData {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
class DiferençaEntreDatas extends OperacaoBinaria2 {
    getTime(data) {
        let { dia, mes, ano } = data;
        return new Date(`${mes}/${dia}/${ano}`).getTime();
    }
    executar() {
        const t1 = this.getTime(this.operando1);
        const t2 = this.getTime(this.operando2);
        const diferença = Math.abs(t1 - t2);
        const dia = 1000 * 60 * 60 * 24;
        return `${Math.ceil(diferença / dia)} dia(s)`;
    }
}
const d1 = new MinhaData(1, 2, 2020);
const d2 = new MinhaData(5, 2, 2020);
console.log(new DiferençaEntreDatas(d1, d2).executar());
class SomaBinaria extends OperacaoBinaria2 {
    executar() {
        return this.operando1 + this.operando2;
    }
}
console.log(new SomaBinaria(3, 4).executar());
