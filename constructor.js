const Car = function (brands, price, stock) {
    this.brands = brands;
    this.price = price;
    this.stock = stock;
}

const bmw = new Car("BMW", 10, 3)
const bmwL = new Car("BMW 12", 15, 3)

console.log(bmw);
