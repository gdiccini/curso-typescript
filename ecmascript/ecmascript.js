"use strict";
// 1 - mudar para typescript
// var dobro = function(valor) {
//   return valor * 2
//   }
//   console.log(dobro(10))
let dobro = (n) => n * 2;
console.log(dobro(2));
// 2
// var dizerOla = function (nome) {
//   if (nome === undefined) { nome = "Pessoa" }
//   console.log("Ola, " + nome)
//   }
//   dizerOla()
//   dizerOla("Anna")
const dizerOla = (name = "Pessoa") => {
    console.log(`Ola, ${name}`);
};
dizerOla();
dizerOla('Giovani');
// 3 - imprimir o menor valor
var nums1 = [-3, 33, 38, 5];
console.log(Math.min(...nums1));
//  Adicione os elementos de nums em array
// var nums2 = [-3, 33, 38, 5]
// var array = [55, 20]
const nums2 = [-3, 33, 38, 5];
const array = [55, 20, ...nums2];
console.log(array);
//  Simplifique os trechos de código abaixo utilizando o operador
// Destructuring!
// var notas = [8.5, 6.3, 9.4]
// var notas1 = notas[0]
// var notas2 = notas[1]
// var notas3 = notas[2]
// console.log(nota1, nota2, nota3)
// ---------------/------------/------------
// var cientista = {primeiroNome: "Will", experiencia: 12}
// var primeiroNome = cientista.primeiroNome
// var experiencia = cientista.experiencia
// console.log(primeiroNome, experiencia)
const notas = [8.5, 6.3, 9.4];
console.log(...notas);
// ou
const [nota1, nota2, nota3] = notas;
console.log(nota1, nota2, nota3);
// ------------/--------------/--------------
const cientista = { primeiroNome: "Will", experiencia: 12 };
const { primeiroNome, experiencia } = cientista;
console.log(primeiroNome, experiencia);
