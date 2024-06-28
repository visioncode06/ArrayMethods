class Car{
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.mileage = 0;
    }

    displayDetails() {
        console.log(`Car: ${this.year} ${this.make} ${this.model}`);
    }

}

const car1 = new Car('Toyota', 'Corolla', 2015);
const car2 = new Car('Chevy', 'Corvette', 2024);


console.log(car1.displayDetails())
