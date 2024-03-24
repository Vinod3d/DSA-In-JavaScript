let firstName = "Vishal"

// console.log(firstName.length)
// console.log(firstName.charAt(1))  


// ########################### Q 5 : Find the index of the first occurrence in a string ################################
var strStr = function(haystack, needle){
    return haystack.indexOf(needle)
};


// ###################### Q 6 : Reverse String ######################################
function reverseWord(word) {
    let reversedWord = '';
    for (let i = word.length - 1; i >= 0; i--) {
        reversedWord += word[i];
    }
    return reversedWord;
}

let originalWord = "example";
let reversed = reverseWord(originalWord);

console.log(`Original word: ${originalWord}`);
console.log(`Reversed word: ${reversed}`);

// ######################### Q 7 : sort String #################################
function sortString(originalString) {
    let sortedArray = originalString.split('').sort();
    let sortedString = sortedArray.join('');
    return sortedString;
}

let originalString = "banana";
let sortedResult = sortString(originalString);

console.log(`Original string: ${originalString}`);
console.log(`Sorted string: ${sortedResult}`);



// ######################### Q 8 : Valid Anagram #################################

var isAnagram = function(s, t){
    return s.split("").sort().join("") === t.split("").sort().join("")
};


console.log(isAnagram("anagram", "nagaram"))



// ###################### Q 9 : Longest Common Prefix ############################

var longestCommonPrefix = function(strs){
    console.log(strs)
   for(let i=0; i<strs[0].length; i++){
        for(let j=1; j<strs.length; j++){
            if(strs[j][i] !==strs[0][i]){
                return strs[0].slice(0, i)
            }
        }
   }
};

console.log(longestCommonPrefix(["flower", "flow", "floight"]))



// ######################### Q. 10 Merge String Alternately #########################

var mergeAlternately = function(word1, word2){
let result = "";
const maxlength = Math.max(word1.length, word2.length);
    for (let i = 0; i < maxlength; i++) {
        if(i<word1.length){
            result+= word1[i]
        }

        if(i<word2.length){
            result+= word2[i]
        }
    }
    return result;
console.log(maxlength)
};


console.log(mergeAlternately('vinod', '123456'))


// ################### Q. 11 Length of last word #########################

let lastWord = function(txt){
    let lword = txt.split(" ").slice(-1).toString().length
    console.log(lword)
}

console.log(lastWord('hello world vinod lllshklhglkhslk'))

