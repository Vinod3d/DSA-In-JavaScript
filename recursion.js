// 1 Recursion

function fun(n){
    if(n == 0){
        return;
    }
    console.log("fun", n) 

    fun(n - 1)
}

// fun(10)

// factorial

function factorial(n){
    if(n === 0 ){
        return 1;
    }
    
    return n * factorial(n-1)
}

// console.log(factorial(8))

// sum of Array: Given an array, return sum of it's elements

function sumOfArray(arr){
    if(arr.length === 0){
        return 0;
    }
    // return arr[arr.length - 1] + sumOfArray(arr.slice(0, arr.length-1))

    const lastElement = arr.pop();
    return lastElement + sumOfArray(arr)
}

console.log(sumOfArray([1, 2, 3, 4, 5]))


let fib = function(n) {

    if(n < 2){
        return n;
    }

    let prev = 0, curr = 1, next;
    for(let i=0; i<= n; i++){
        next = prev + curr;
        prev = curr;
        curr = next;
    }
    return next;
};

// Fibonacci Sequence: 0 1 1 2 3 5 8...
console.log(fib(5)); // 5
console.log(fib(10)); // 55


// generate fibonachi sequence

function generateFibonacci(n) {
    let fibSequence = [0, 1];

    for (let i = 2; i < n; i++) {
        fibSequence[i] = fibSequence[i - 1] + fibSequence[i - 2];
    }

    return fibSequence;
}

// Specify the number of terms you want in the Fibonacci sequence
const numberOfTerms = 10;

// Call the function and log the result
console.log(generateFibonacci(numberOfTerms));