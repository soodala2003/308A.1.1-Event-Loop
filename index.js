const heading = document.querySelector("h1");
const textEl = document.querySelector("p");
const num = 10000;

heading.innerText = `Prime numbers between 1 and ${num} :`; 
textEl.innerText = primeLists(num);

function isPrime(n, divisor) {
    try {
        if (n < 2) {
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
    } catch (err) {
        console.log(err);
        console.log(n);
    }
} 
    
function primeLists(n) {
    let primeNumArr = [];
    let divisor = 2;
    for (let i = 1; i <= n; i++) {
        if (isPrime(i, divisor) === true) {
            primeNumArr.push(i);
        } 
    }
    alert("Calaulation is Done!");
    return primeNumArr;
} 

const factorial = (n) => { 
    if (n === 0) {
        return 1;                  
    } else {    
        return n * factorial(n - 1); 
    }
}

const facto = (n, a = 1) => {
    if (n === 0) {
        return a;
    } else {
        return () => facto(n - 1, n * a);
    }
}

const trampoline2 = (f, ...args) => {
    let result = f(...args);
    while (typeof result === "function") {
      result = result();
    }
    return result;
}

console.log(trampoline2(facto(10000))); 