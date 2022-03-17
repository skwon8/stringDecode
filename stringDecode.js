/*
create a function called strDecode() that does the following: 

input: "a3b4c1d2"
output: "aaabbbbcdd"


*/

const stringDecode = (str) => {

    let currentChar = str[0];
    let output = "";

    for (i = 1; i < str.length; i++) {
        console.log(str[i])
        // check if the current Character is a number
        if (!isNaN(str[i])) {
            output += currentChar.repeat(str[i]);
        } else {
            currentChar = str[i];
        }
    }
    return output;
}

console.log(stringDecode("a3b4c1d2")) // aaabbbbcdd