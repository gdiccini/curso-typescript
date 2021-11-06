"use strict";
// Desafio Mapa
// Array de Objetos (Chave/Valor) -> itens
// Métodos: obter(Chave), colocar({ C, V })
// limpar(), imprimir()
class Mapa {
    constructor() {
        // private itens: { chave: T, valor: R }[] = []; forma válida
        // private itens: Par<T, R>[] = []; forma válida
        this.itens = [];
    }
    // colocar(argumento: { chave: T, valor: R }) { forma valida
    colocar(argumento) {
        const item = this.itens.find((element) => element.chave === argumento.chave);
        if (item) {
            const index = this.itens.indexOf(item);
            this.itens[index] = argumento;
            return;
        }
        this.itens.push(argumento);
    }
    obter(chave) {
        const element = this.itens.find((element) => element.chave === chave);
        if (element)
            return element;
        return null;
    }
    imprimir() {
        console.log(this.itens);
    }
    limpar() {
        this.itens = [];
    }
}
const mapa = new Mapa();
mapa.colocar({ chave: 1, valor: 'Pedro' });
mapa.colocar({ chave: 2, valor: 'Rebeca' });
mapa.colocar({ chave: 3, valor: 'Maria' });
mapa.colocar({ chave: 1, valor: 'Gustavo' });
console.log(mapa.obter(2));
mapa.imprimir();
mapa.limpar();
mapa.imprimir();
