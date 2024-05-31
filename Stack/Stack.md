## Stack


In the context of Data Structures and Algorithms (DSA), a stack is a linear data structure that follows the Last In, First Out (LIFO) principle. It means that the element which is inserted last is the first one to be removed.


### Q. Add Element in Array in Last.

```js
    class Stack{
        item = [];
        currentSize;
        maxSize;
        constructor(size){
            this.maxSize = size;
            this.currentSize= this.item.length;
        }
        push(newVal){
            if(this.currentSize>this.maxSize){
                console.log("stack in full");
            } else{
                this.item[this.currentSize] = newVal;
                this.currentSize++;
            }
        }
        pop(){
            if(this.currentSize>0){
                this.currentSize--;
                this.item.length = this.currentSize;
            }else(
                console.log("stack is already empty")
            )
        }
        display(){
            console.log(this.item)
        }
    }

    st1 = new Stack(5)
    st1.push(20)
    st1.push(20)
    st1.pop()
    st1.display()
```



### Q. Reverse String.

```js
    
    let data = [];
    let currentSize = data.length;

    function push(newVal){
        data[currentSize] =  newVal;
        currentSize++;
    }

    function pop(){
        lastRemovedItem = data[currentSize -1];
        data.length = currentSize -1 ;
        currentSize--;
        return lastRemovedItem;
    }

    function reverse(item){
        for(i = 0; i<item.length; i++){
            push(item[i])
        }
        for(i = 0; i<item.length; i++){
            item[i] = pop();
        }
    }


    let str = 'vinod';
    let strArr = str.split("")
    reverse(strArr)
    console.log(strArr.join( ""))
    console.log("data", data);
```


```js
    class Stack {
    temp = [];
    currentSize = 0;

    constructor() {
        this.currentSize = this.temp.length;
    }

    push(element) {
        this.temp[this.currentSize] = element;
        this.currentSize++;
    }

    pop() {
        if (this.currentSize > 0) {
        let lastRemovedItem = this.temp[this.currentSize - 1];
        this.temp.length = this.currentSize - 1;
        this.currentSize--;
        return lastRemovedItem;
        } else {
        console.log("stack is already empty");
        }
    }

    reverseSrt(arr) {
        let reversedStr = "";
        for (let i = 0; i < arr.length; i++) {
        this.push(arr[i]);
        }

        while (this.currentSize > 0) {
        reversedStr += this.pop();
        }

        return reversedStr;
    }
    }

    let str = "vinod";
    let strArr = str.split("");
    st1 = new Stack();
    st1.reverseSrt(strArr);
    console.log(st1.reverseSrt(strArr));

```