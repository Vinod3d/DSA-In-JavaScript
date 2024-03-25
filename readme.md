# Data Stucture Using JavaScript -- Questions

###  Q 1. How to sort an array in ascending and desending order?

```js
    const x = [1, 4, 6, 0, -9, -2, -5, -1];

    // Sort in ascending order
    const ascendingOrder = x.slice().sort((a, b) => a - b);
    console.log("Ascending order:", ascendingOrder);

    // Sort in descending order
    const descendingOrder = x.slice().sort((a, b) => b - a);
    console.log("Descending order:", descendingOrder);
```


### Q 2. Generate fibonachi sequence.

```js
    let fib = function(n) {

        let prev = 0, curr = 1, next;
        console.log(prev);
        console.log(curr);
        for (let i = 2; i <= n; i++) {
            next = prev + curr;
            console.log(next);
            prev = curr;
            curr = next;
        }
        return next;
    };

    // Fibonacci Sequence: 0 1 1 2 3 5 8...
    console.log(fib(5));

```

```js
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
```

### Q 3. find smallest number in array.

```js
    function findSmallest(arr){
        let smallestNum = arr[0]

        for(i = 1; i<= arr.length; i++){
            if(arr[i] < smallestNum){
                smallestNum = arr[i];
            }
        }
        return smallestNum;
    }
    const numbers = [5, 3, 8, 1, 9, 2];
    console.log("Smallest number:", findSmallest(numbers));
```