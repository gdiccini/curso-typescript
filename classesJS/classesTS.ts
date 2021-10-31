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
console.log(birthday.mes)

// Aula 2 do módulo

class SmartDate {
    constructor(public dia: number = 1, public mes: number = 1, public ano: number = 1970) {}
}

const birthday2 = new SmartDate();
console.log(birthday2.mes)