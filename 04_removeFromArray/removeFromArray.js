const removeFromArray = function(arr, ...args) {
    let arr2 = arr.filter(item => !args.includes(item)) 
    console.log(arr2)
    return (arr2)
};
removeFromArray([1, 2, 3, 4], 3)
removeFromArray([1, 2, 3, 4], 3, 2)
removeFromArray([1, 2, 3, 4], 7, "tacos")
removeFromArray([1, 2, 3, 4], 7, 2)
removeFromArray([1, 2, 3, 4], 1, 2, 3, 4)
removeFromArray(["hey", 2, 3, "ho"], "hey", 3)
removeFromArray([1, 2, 3], "1", 3)
// Do not edit below this line
module.exports = removeFromArray;
