const factorial = (n) => { // function factorial(n)
    if (n === 0) return 1; // The base case, to stop recursion
    return n * factorial(n - 1); // The recursive call
    //return n ? n * factorial(n -1) : 1 
}

const facto = (n, a = 1) => {
    if (n === 0) return a;
    return () => facto(n - 1, n * a);
}

function newFactorial (n) {
    let facto = function myFactorial(n, a) {
        return n ? myFactorial(n * a, n -1) : a
    };
    return facto(n, 1)
}

facto(10000, 1);

const trampoline2 = (f, ...args) => {
    let result = f(...args);
    while (typeof result === "function") {
      result = result();
    }
    return result;
}

console.log(trampoline2(facto(10000)));



/* function flatten(arr) {
    let result = []; // This will hold the flattened result
    for (const item of arr) { // Loop through each item in the array
        if (Array.isArray(item)) { // Check if the item is an array
            //console.log(item);
            result = result.concat(flatten(item)); // Call flatten recursively and combine results
            //console.log(result);
        } else {
            result.push(item); // If not an array, add the item to the result
        }
    }
    return result; // Return the flattened array
}
   
// Usage
const nestedArray = [1, [2, [3, [4, [5]]]], 6];
const flatArray = flatten(nestedArray);
console.log(flatArray); // Output: [1, 2, 3, 4, 5, 6]

try {
    if (flatten(nestedArray)) {
        console.log(flatArray);          
    } else {
        throw "Error!";
    } 
} catch (err) {
    console.log(err);
    console.log("This catch block more code if the 'try' block fails!");
} finally {
    console.log(flatArray);
} 

const trampoline = (f, ...args) => {
    let result = f(...args);
    while (typeof result === "function") {
      result = result();
    }
    return result;
}


 */

/* const counter = 15000;

function primeNumber(n, divisor) {
    let isPrime = true;
    if (n < 2) {
        return isPrime = false;
    } else if (n === 2) {
        isPrime = true;
        //console.log(n);
         return isPrime;
    } else {
        if (n % divisor === 0) {
            isPrime = false;
            return isPrime;
        } else if (divisor ** 2 > n) {
            isPrime = true;
            //console.log(n);
            return isPrime;
        } else {
            return primeNumber(n, divisor + 1);
        }   
    }  
          
}

console.log(primeNumber(10, 2));


for (let i = 2; i <= counter; i++) {
    try {
        if (primeNumber(i, 2)) {
            //console.log(`${i} is Prime!`);          
        } else {
            throw "Error!";
        } 
    } catch (err) {
        console.log(err);
        console.log(counter);
    } finally {
        console.log(counter);
    }
}





 */







