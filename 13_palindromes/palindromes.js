const palindromes = function (string) {
    const lowerCase = string.toLowerCase();
    const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";
    let strAsArr = [...lowerCase];
    strAsArr = strAsArr.filter((value) => alphanumerical.includes(value));
    console.log(strAsArr);

    for(let i = 0; i < strAsArr.length / 2; i++)
    {
        if (strAsArr[i] != strAsArr[strAsArr.length - i - 1])
            return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
