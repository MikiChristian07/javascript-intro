const i = document.querySelector('.date');
function displayDate(){
    const year = new Date().getFullYear();
    i.innerText = year;

}



console.log(i);