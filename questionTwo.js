function numberGenerator(x,y){
    const number = [];
    for (let p=x;p<=y;p++){
        number.push(p)
    }
    return number
}


// Example usage:
console.log(numberGenerator(4,7))
console.log(numberGenerator(-4,7))