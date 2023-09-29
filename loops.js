
// const colors = ['Green', 'Yellow', 'Blue', 'Magenta', 'cyan'];

// for(let i = 0; i < colors.length; i++) {
//     console.log(colors[i]);
// }

// For in

const customers = [
    {
        name: 'John',
        age: 30,
        city: 'New York'
    },

    {
        name: 'Mike',
        age: 20,
        city: 'Texas'
    },
    {
        name: 'Sarah',
        age: 25,
        city: 'Europe'
    },
    {
        name: 'Amy',
        age: 19,
        city: 'penslyvania'
    }
];

let allCustomers = [];

customers.forEach(function(customer) {
    allCustomers.push(customer.name);
})

// console.log(customers.length);

const foods = {
    vegetables: 10,
    fruits: 20,
    meat: 30
}

console.log(foods.length);


