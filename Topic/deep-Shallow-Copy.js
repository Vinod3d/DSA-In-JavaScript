let obj = {
    name: 'peter',
    address:{
        city: 'london',
        country: 'uk'
    },
    getData : function(){
        return  "all data is here"
    }
};


// Shallow Copy 1
// let user = Object.assign({}, obj);


// Shallow Copy can mutate nested property

//Shallow Copy 2
// let user = {...obj}

// Deep Copy cannot copy function so resolve this isssue we use lodash npm package
// let user = _.cloneDeep(obj)

//Deep Copy
let user = JSON.parse(JSON.stringify(obj))

user.address.city = 'Gurgaon';
user.name = 'Vinod';

console.log(obj); // john
console.log(user); // vinod


