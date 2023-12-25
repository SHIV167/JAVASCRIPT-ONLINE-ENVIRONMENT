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



//FIRST MISSING NUMBER IN ARRAY

const input = [5, 7, 9, 13, 15];
const n = 3;
const output = [11];

// for (let i = 0; i < input.length; i++) {
//   let current = input[i];
//   let next = current + 2;

//   if (input[i + 1] == next) continue;
//   else {
//     console.log(next);
//
//   }
// }

for (let i = 0; i < input.length; i++) {
  let current = input[i];
  let next = current + 2;
  if (input[i + 1] !== next) {
    console.log(next);
    break;
  }
}

//REVERSE SRING
const srt = "this is only javascript code";

const striNg = srt.split(" ");

const outPut = striNg
  .map((item) => item.split("").reverse().join(""))
  .join(" ");

console.log(outPut);

//REVERSE SRING
//const srt = "this is only javascript code";

const arrOfset = srt.split("");
const arr = arrOfset.reduce(
  (accu, curr) =>
    Object.keys(accu).includes(curr)
      ? { ...accu, [curr.toLowerCase()]: accu[curr] + 1 }
      : { ...accu, [curr.toLowerCase()]: 1 },
  {}
);

const count = Object.entries(arr).sort((a, b) => b[1] - a[1]);

console.log(count);

function getString(str) {
  const map = {};
  str.split("").forEach((element) => {
    map[element] = map[element] ? map[element] + 1 : 1;
  });

  let max = 1;
  let char = str[0];
  for (let k in map) {
    if (map[k] > max) {
      max = map[k];
      char = k;
    }
  }
  return char;
}
const final = getString("hello eorldhhhhhhhhhhhhhhh jhjhjhjhjhjhj");
console.log(final);







































































