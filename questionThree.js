function prime(x) {
    if (x <= 1) return false;
    if (x === 2) return true;
    if (x % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(x); i += 2) {
        if (x % i === 0) return false;
    }
    return true;
}
