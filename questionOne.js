function swappedCase(input) {
    let swappedCase = ""; //variable with an empty string
    for (const char of input)    //a 'for' of condition that loops
    {
        if (char === char.toLowerCase()) {
            swappedCase += char.toUpperCase(); //Converts a swapped character to uppercase.
        } else {
            swappedCase += char.toLowerCase(); //Converts a swapped character to lowercase.
        }
    }

    return swappedCase; //return swapped letters
}


// Example usage:
console.log(swappedCase('The Quick Brown Fox'));