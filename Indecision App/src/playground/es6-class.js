class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name
        this.age = age
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old!`
    }
}

class Traveler extends Person {
    constructor(name = 'Anonymous', age = 0, homeLocation) {
        super(name, age)
        this.homeLocation = homeLocation
    }

    getDescription() {
        let description = super.getDescription()
        if(this.homeLocation) {
            description += `I'm come from ${this.homeLocation}`
            return description
        }
        else return description
    }
}

const person1 = new Traveler('Long', 21, 'Viet Nam')
console.log(person1.getDescription())