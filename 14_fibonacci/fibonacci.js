const fibonacci = function(index) {
    if (+index == 0) return 0;
    if (index <= -1) return "OOPS";
    let fib = [1, 1];
    for (let i = 1; i < +index; i++) {
        fib.push((fib[i - 1] + fib[i]));
    }
    return fib[fib.length - 2];
};

// Do not edit below this line
module.exports = fibonacci;
