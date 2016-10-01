//Needed a way to define the previous day in JavaScript based on the current day, and without importing addtional librarys

//Define Variables
var date = new Date();
var dd = date.getDate()-1;
var mm = date.getMonth()+1;
var yyyy = date.getFullYear();

//Handle if it is the first day of the month or year
if(dd === 0 ){
    //Handle January 1st
    if(mm - 1 === -1){
        var dd = 31;
        var mm = 12;
        var yyyy = yyyy-1;
    //Handle March 1st
    } else if(mm - 1 === 1){
        var dd = 28;
        var mm = 2;
    //Check if the month is May, June, October, or December, since they follow 30 day months
    } else if(mm - 1 === 4 || mm - 1 === 6 || mm - 1 === 9 || mm - 1 === 11){
        var dd = (dd + 30);
        var mm = (mm -1);
    }else {
    //handle all other months
    var dd = (dd + 31);
    var mm = (mm - 1);
    }
}

//Give correct notation to single digit days, months
if(dd<10) {
    dd='0'+dd;
} 
if(mm<10) {
    mm='0'+mm;
}

//date output
date = yyyy+'-'+mm+'-'+dd;
console.log(date)
