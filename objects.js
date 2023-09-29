const car = {
    name: 'Tesla', 
    price: 15000,  
    isUsed: true,
    color: 'Red',
    fullName: function(){
        const name = this.name + ' 2.0';
        return name
    } 
}

car.name = 'Toyota'

const car1 = new car();

console.log(car)

