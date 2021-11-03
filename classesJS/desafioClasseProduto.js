"use strict";
class Product {
    constructor(name, price, discount = 0) {
        this.name = name;
        this.price = price;
        this.discount = discount;
    }
    discountedPrice() {
        return this.price * (1 - this.discount);
    }
    resume() {
        return `${this.name} custa R$${this.discountedPrice()} (${this.discount * 100}% off)`;
    }
}
const product1 = new Product('Meu produto1', 10, 0.1);
const product2 = new Product('Meu produto2', 30, 0.2);
console.log(product1.resume());
console.log(product2);
