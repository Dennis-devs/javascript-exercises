const leapYears = function(year) {
if(year % 400 == 0){
    console.log("true, Leap year")
    return true
}
else if(year % 100 == 0){
    console.log("False, Not a Leap year")
    return false
}
else if(year % 4 == 0){
    console.log("true, Leap year")
    return true
}
else return false
};
leapYears(1996)
leapYears(1997)
leapYears(34992)
leapYears(1900)
leapYears(1600)
leapYears(700)
// Do not edit below this line
module.exports = leapYears;
