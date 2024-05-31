 const arr = [1, 2, 3, 4, "Hello", {name: "Vishal"}, [1, 2, 3]];

//  console.log(arr)

 const firstElement = arr[0]
 const arrLenght = arr.length;
 const lastElement = arr[arrLenght - 1]

//  console.log(firstElement, arrLenght, lastElement) // 1, 7, [1, 2, 3]

 // ################Q 1 how do you check if an element exist in an array?##################

 const findElement = (arr, target)=>{
    for(let x of arr){
        if(x === target) return true;
    }
    return false
 }

//  console.log(findElement(arr, "Hello")) // true


 //####################### Q 2 : How do you check if an element exists in an array?#########################

 const findElementIndex = (arr, target) =>{
    for (let x of arr){
        if(x === target) return arr.indexOf(x);
    }
 }

//  console.log(findElementIndex(arr, "Hello"))  // 4

// Shallow Copy of Array

const arrB = arr;
// arrB.splice(1, 4)
// console.log(arrB, arr)

// Deep Copy of Array 
const arrC = [...arr]
const arrD = Array.from(arr)
arrC.splice(1, 4)
arrD.splice(1, 4)
// console.log(arrC, arr) 


// ######################### Q 3 : How can you check if two arrays are equal ? ##########################

const isArrayEqual = (arr1, arr2) => {
    // if(arr1.length !== arr2.length){
    //     return false;
    // }

    // for(let i=0; i<arr1.length; i++){
    //     if(arr1[i] !== arr2[i]){
    //         return false;
    //     }
    // }

    // return true;



    return arr1.length === arr2.length && arr1.every((ele, i) => arr1[i] === arr2[i])
}

// console.log(isArrayEqual([1, 2, 3], [1, 2, 3]))

// ########################### Q 4 : How to sort an array in ascending and desending order? ################################

const x = [1, 4, 6, 0, -9, -2, -5]
x.sort()
console.log(x)

// 1, 4 => 4, 1
x.sort((a, b)=> b - a)
console.log(x)


// ################################ Q 5 : Filter out books published before the year 2000 and return their titles ######################

const books = [
    { title: 'Book 1', year: 1998 },
    { title: 'Book 2', year: 2003 },
    { title: 'Book 3', year: 1995 },
    { title: 'Book 4', year: 2001 },
];

let book = books.filter((item)=>{
    return item.year < 2000
})

console.log(book)


// ############################# Q. 6 Capitalize the first letter of each word in the array ##################################

const strings = ['hello world', 'i am openai', 'welcome to javascript'];

let CapStr = strings.map((item)=>{
  let firstChar = item.split(" ").map((word)=>word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  return firstChar
  console.log(firstChar)
})

console.log(CapStr)


// ###################################### Q. 7 Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

var twoSum = function(nums, target) {
  let x = {}
  for (let i = 0; i < nums.length; i++) {
      let complement = target - nums[i]
      if (x[complement] != null) {
        console.log(x[complement], i)
          return [x[complement], i]
      }
      else {
          x[nums[i]] = i
      }
  }
};

console.log(twoSum([2, 7, 11, 15], 9))

// ####################################### Q. 8 Second Largest Digit in a String ##########################################





