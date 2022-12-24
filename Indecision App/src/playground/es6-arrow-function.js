const multiplier = {
    numbers: [9, 5, 2001],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) => number*this.multiplyBy)
    }
}

console.log(multiplier.multiply())