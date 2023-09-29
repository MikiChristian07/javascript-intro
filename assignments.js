// A program to the sign of the product of three numbers
// function getSign(num1, num2, num3) {
//     const result = num1 * num2 * num3;
//     oddNum
//     evenNum
//     if (result < 0) {
//         console.log("The product of the three number is negative: -");
//     } else {
//         console.log("The product of the three number is positive: +")
//     }
// }

// getSign(1,-2,4)


const arrNums = [20,15,2,78,11];

arrNums.sort(function(a, b){
    return a - b;
})

console.log(arrNums);
