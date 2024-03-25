
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