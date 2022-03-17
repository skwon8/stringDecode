/*
create a function called strDecode() that does the following: 

input: "a3b4c1d2"
output: "aaabbbbcdd"


*/

const stringDecode = (str) => {

    let currentChar = str[0];
    let output = "";
    let currentNum = "";

    for (let i = 1; i < str.length; i++) {
        // console.log(str[i])
        // check if the current Character is a number

        if (!isNaN(str[i])) {
            currentNum += str[i];
        } else {
            output += currentChar.repeat(currentNum);
            currentChar = str[i];
            currentNum = "";
        }
    }
    output += currentChar.repeat(currentNum);
    return output;
}

console.log(stringDecode("a3b4c11d2")) // aaabbbbcdd