//1. REVERSE SENTENCE

let string = "my name is shiv kumar jha"
let accu = string.split(" ").map(function (word){return word.split("").reverse().join("");})
console.log(accu.join(" "));

//2. CHECK ARRAY ?

let array = [1,2,3,4,5]
let int = 24
//console.log(typeof(array)); output object
//console.log(typeof(int)); //output object
console.log(Array.isArray(array));

//3. CHECK INT ?
if(int%1 === 0){
    console.log("I AM NUMBER");
}
else{

console.log("I AM NOT NUMBER"); 
}

//4. CONVERT NUMBER  TO STRING AND REVERSE RESULT CONVERTED TO NUMBER
function reverse(int){
return Number(int.toString().split("").reverse().join(""));


}
console.log(reverse(25));







































































