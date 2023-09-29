// To calculate the rsult of a quadratic equation
function quadSolver(a, b, c){
    const posRes = -b + Math.sqrt(b**2 - 4*a*c) / 2 * a
    const negRes = -b - Math.sqrt(b**2 - 4*a*c) / 2 * a

    const result = `The roots of the Equation are: ${posRes} and ${negRes}`;
    
    console.log(result);
}
// quadSolver(2, -1, 0);

// To calculate the age of a dog in human years
function dogYrs(age){
    const humanAge = 7 * age;
    console.log(humanAge);
}

dogYrs(5);
dogYrs(12);

