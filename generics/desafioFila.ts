class Fila<T> {
  private fila: Array<T>

  constructor(...args: T[]) {
    this.fila = args;
  }

  entrar(elemento: T) {
    this.fila.push(elemento)
  }

  proximo(): T {
    const primeiro = this.fila[0];
    this.fila.splice(0, 1);
    return primeiro;
  }

  imprimir() {
    console.log(this.fila);
  }
}

const fila = new Fila<string>('gio', 'mari', 'saul')
fila.imprimir();