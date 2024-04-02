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

```js
    let data = [40, 30, 12, 25]; 

    for(i = 0; i<data.length; i++){
        for(j=0; j<data.length; j++){
            if(data[j]>data[j+1]){
                let temp = data[j];
                data[j] = data[j+1];
                data[j+1] = temp;
            }
        }
    }

    console.log(data)
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

### Q 4. Write a JavaScript algorithm to insert a new element at a specified position in an array?

```js
    let data = [60, 30, 10, 67, 40];
    let newEl = 70;
    let position = 2;

    for(let i=data.length-1 ; i>=0; i--){
        // console.log(data[i])
        if(i>=position){
            data[i+1] = data[i];
            if(i==position){
                data[i]=newEl;
            }

        }
    }
    console.log(data)
```

### Q 5. Implement a JavaScript algorithm to delete an element from an array at a specified position. 

```js
    let data = [60, 30, 10, 67, 40]; 
    let position = 2;

    for(let i = position; i<data.length-1; i++){
        // console.log(data[i])
        data[i] = data[i+1];
    }
    data.length = data.length - 1;
    console.log(data)
```

### Q 6. Write a JavaScript algorithm to merge two arrays data and data2 into a new array data3.

```js
    let data = [60, 30, 10, 67, 40, 32, ]; 
    let data2 = [1, 2, 3, 4, 5, 6, 7, 8, 9 ]; 
    let data3 = [];

    for(i = 0; i<data.length; i++){
        data3[i] = data[i]
    }

    for(i = 0; i<data2.length; i++ ){
        data3[data.length + i ]= data2[i];
    }
    console.log(data3)
```

```js
    let data1 = [60, 30, 10, 67, 40, 32, ]; 
    let data2 = [1, 2, 3, 4, 5, 6, 7 ]; 
    let data3 = [];

    let d1 = 0;
    let d2 = 0;
    let d3 = 0;

    while(d1 < data1.length && d2<data2.length){
        if(data1[d1]<data2[d2]){
            data3[d3]=data1[d1];
            d1++;
        } else{
            data3[d3]=data2[d2],
            d2++
        }
        d3++
    }

    while(d1<data1.length){
        data3[d3]=data1[d1];
        d1++;
        d3++;
    }

    console.log(data3)
```

### Q 7. Find second largest element from an array.

```js
    let data = [1, 5, 7, 6, 3];
    let largest = data[0];
    let secondLargest = data[0];

    for (let i = 1; i < data.length; i++) {
        if (data[i] > largest) {
            secondLargest = largest;
            largest = data[i];
        } else if (data[i] > secondLargest && data[i] !== largest) {
            secondLargest = data[i];
        }
    }

    console.log(secondLargest);
```

### Q 8. Reverse Array in Javascript.

```js
    let data = [60, 30, 10, 67, 40, 32, ]; 

    function reverse(data, start, end){
        while (start < end) {
            var temp = data[start];
            data[start] = data[end];
            data[end] = temp;
            start++;
            end--;
            console.log(data)
        }
    }

    reverse(data, 0, data.length - 1);
```

```js
    let data = [60, 30, 10, 67, 40, 32, ]; 

    function reverse(data, start, end){
        console.log(data)
    if(start<end){
            var temp = data[start]
            data[start] = data[end];
            data[end] = temp

            reverse(data, start+1, end-1)
        }
    }

    reverse(data, 0, data.length - 1);
```

### Q 9. Add Element in Array in Last.

```js
    let data = [60, 30, 10, 67 ]; 
    let max = 6;


    function push(x){
        let currentSize = data.length;
        data[currentSize] =  x;
        console.log(data)
    }

    push(45);
    push(78);
```

### Q. 10. Remove Element from Array in Last.

```js
    let data = [60, 30, 10, 67 ]; 
    let max = 6;

    function pop(){
        let currentSize = data.length;

        if(currentSize>0){
            data.length = currentSize-1
        } else{
            alert('stack is already empty')
        }
        console.log(data)
    }

    pop();
```