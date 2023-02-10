const Car = function (brands, price, stock) {
    this.brands = brands;
    this.price = price;
    this.stock = stock;


    //avoid this
    // this.totalProfit = function () {
    //     return
    // }
}

const bmw = new Car("BMW", 10, 3)
const bmwL = new Car("BMW 12", 15, 3)

Car.prototype.totalProfit = function () {
    return this.price * this.stock
}

// console.log(bmw);

console.log(bmw instanceof Car)


// console.log(bmw, __proto__);

const arr = [1, 2, 3, 4, 5, 6, 7, 8]

console.log(arr.__proto__);