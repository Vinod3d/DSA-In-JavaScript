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

