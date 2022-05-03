const sumAll = function(...args) {
let arr = []
console.log(args)
if(((args[0] || args[1]) < 0) || (Number.isInteger(args[0]), Number.isInteger(args[1]) == false)){
    console.log("ERROR")
    return "ERROR"
}
else if(args[1] > args[0]){ 
    for (let i = args[0]; i <= args[1]; i++){
         arr.push(i)
        }
    }
    else if(args[0] > args[1]){
    for(let i = args[0]; i >= args[1]; i--){
        arr.push(i)
        }
    } 
    let Sum = arr.reduce((Acc, Val) => Acc + Val)
    console.log(Sum)
    return Sum
};
sumAll(1, 4)
sumAll(1, 4000)
sumAll(123, 1)
sumAll(-10, 4)
sumAll(10, "90")
sumAll(10, [90, 1])
// Do not edit below this line
module.exports = sumAll;
