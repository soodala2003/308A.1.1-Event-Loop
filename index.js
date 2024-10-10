const counter = 10000;


function isPrime(n, divisor) {
    if (n === 1) {
        return false;
    } else if (n === 2) {
        return true;
    } else if (n % divisor === 0) {
        return false;
    } else if (divisor ** 2 > n) {
        return true;
    } else {
        return isPrime(n, divisor + 1);
    }
}


