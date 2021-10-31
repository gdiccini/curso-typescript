class Product {
  constructor(public name: string, public price: number, public discount: number = 0) {}

  public discountedPrice(): number {
    return this.price * (1 - this.discount)
  }

  public resume(): string {
    return `${this.name} custa R$${this.discountedPrice()} (${this.discount * 100}% off)`;
  }
}

const product1 = new Product('Meu produto1', 10, 0.1);
const product2 = new Product('Meu produto2', 30, 0.2);

console.log(product1.resume());
console.log(product2)