class Product {
  constructor(public name: string, public price: number, public discount: number = 0) {}
}

const product1 = new Product('Meu produto1', 10);
const product2 = new Product('Meu produto2', 30, 0.2);

console.log(product1)
console.log(product2)