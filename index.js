const result = 0;


function isPrime(n, divisor) {
    for (let i = 2; i <= n; i++) {
        let isPrime = true;
        if (i < 2) {
            return isPrime = false;
        } else if (i === 2) {
            return isPrime = true;
        } else {
            if (i % divisor === 0) {
                return isPrime = false;
            } else if (divisor ** 2 > i) {
                return isPrime = true;
            } else {
                return isPrime(i, divisor + 1);
            }
        }       
    }
}

let isPrime = true;

try {
    if (isPrime(counter, divisor)) {
        console.log(n);          
    } else {
        throw "Error!";
    } 
} catch (err) {
    console.log(err);
    console.log("This catch block more code if the 'try' block fails!");
} finally {
    console.log(counter);
}



