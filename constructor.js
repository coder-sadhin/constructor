const Car = function (brands, price, stock) {
    this.brands = brands;
    this.price = price;
    this.stock = stock;
}

const bmw = new Car("BMW", 10, 3)

console.log(bmw);
