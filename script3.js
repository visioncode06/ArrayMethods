//let arr =[ 1, 22, 35, 10, 85, 97, 100, 457, 500, 979]

const inventory = [
    { id: 1, name: 'Laptop', quantity: 4, price: 1000 },
    { id: 2, name: 'Monitor', quantity: 10, price: 150 },
    { id: 3, name: 'Mouse', quantity: 50, price: 20 },
    { id: 4, name: 'Keyboard', quantity: 30, price: 40 },
    { id: 5, name: 'Phone', quantity: 5, price: 600 },
];


let sum = arr.reduce((total, currentValue) => total + currentValue,  0) 
console.log ("total:" + total)
console.log ("currentValue:" + currentValue)
return total + currentValue


console.log("sum:" + sum)


arr.forEach(num => console.log("current value in for each: " + num))

tasks.forEach(task => createTask(task));

// Inventory array of objects


function printTheNames(){
        inventory.forEach(item => console.log(item.name))
}


function showLowQuantity() {
    let lowQuantity = inventory.filter( item => item.name == 'Monitor') 
    console.log(lowQuantity)
}

// the above filter is the same as doing this:
let newArray =[]
for(item of inventory){
    if (item.name == 'Mouse'){
        newArray.push(item)
    }
}

console.log(newArray)

function itemNamesToUppercase() {
    let modNames = inventory.map(item => item.name.toUpperCase())
        console.log(modNames)

}

function salesTax() {
    inventory.map(item => item.price += ((item.price)*.15))
    console.log(inventory)

}

function reduceQuantity() {
    inventory.map(item => item.quantity -= 2)
    console.log(inventory)

}


function totalInventoryValue() {
    const getTotalItemValue = (accumulator, item) => {
        return accumulator + (item.price * item.quantity);
    };

    const INITIAL_VALUE = 0;

    // Using reduce to calculate total inventory value
    const totalValue = inventory.reduce(getTotalItemValue, INITIAL_VALUE);

    console.log("Total Inventory Value: $" + totalValue);
}

// This is doing the same as the reduce method above
newTotal = 0
for(let item of inventory){
    newTotal += (item.quantity * item.price)
}

console.log(newTotal)

// Testing functions
printTheNames();
showLowQuantity();
itemNamesToUppercase();
salesTax()
reduceQuantity()
totalInventoryValue();
