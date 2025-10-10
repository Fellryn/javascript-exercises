const removeFromArray = function (arr) {
    if (arguments.length == 1) return arr;
    newArr = [...arr];

    for (let i = 1; i < arguments.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            let index = newArr.indexOf(arguments[i]);
            if (index != -1) {
                newArr.splice(index, 1);
                j--;
            }
        }
    }
    return newArr;
};
// Do not edit below this line
module.exports = removeFromArray;
