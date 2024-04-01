function prime(x) //checks whether a number is prime or not.
{
    if (x <= 1) return false;
    if (x === 2) return true;
    if (x % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(x); i += 2) //a 'for' of condition that loops and the Math.sqrt(x) function returns the square root of the number 'x'
    {
        if (x % i === 0) return false;
    }
    return true;
}
function primeNumbers(y) //checks each number using the primeNumbers helper function, and adds prime numbers to a result array.
{
    const primes = [];
    for (const x of y)  //a 'for' of condition that checks all the numbers and loops prime numbers to the array
    {
        if (prime(x)) {
            primes.push(x);
        }
    }
    return primes;
}

// Example usage:
console.log(primeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));