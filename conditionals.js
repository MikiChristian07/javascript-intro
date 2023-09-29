// if ( 1 == 2){
//     console.log("true");
// } else if (1 !== 1){
//     console.log("false");
// } else {
//     console.log('It is nethier true or false')
// 

// Greetings
// const currTime = new Date().getHours();

// if(currTime < 12){
//     console.log('Good Morning');
// } else if (currTime < 19){
//     console.log('Good Afternoon');
// }else{
//     console.log('Good Night');
// }


// Day of the week
const dayOfWeek = new Date().getDay();
// console.log(dayOfWeek);

switch(dayOfWeek){
    case 0:
        console.log('Sunday');
        break;
    case 1:
        console.log('Monday');
        break;
    case 2: 
        console.log('Tuesday');
        break;
    case 3:
        const days = ['Sunday','Wednesday','Friday']; 
        days.push('Wednesday');
        console.log(days);
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    default:
        console.log('Invalid Day');
        break;
}

