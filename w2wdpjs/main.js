// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

function max(num1, num2){
  if (num1 > num2){
  return num1
}
  else {
    return num2
  }
}

console.log(max(1,2));


// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(num1, num2, num3) {
  return Math.max(num1, num2, num3);
}
console.log(maxOfThree(1,2,30));


// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(letter) {
  if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u"){
    return true
  }
else {
  return false
  }
}
isVowel('a');

// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.
function sum(num1, num2) {
 return num1 + num2;
}
sum(10,20);


// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.
function avg(num1, num2, num3) {
  return (num1 + num2 + num3) / 3;
}
avg (2, 4, 6);

// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.
function getLength(stringlength){
  return (stringlength.length);
}

console.log(getLength("OMG a big giant string!!!"));
// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.
function greaterThan(a, b){
  if (a > b) {
    return true
  }
  else {
    return false
    }
}
greaterThan(1,5);

// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.
function greet(person) {
  console.log ("Hello " + person + " !");
}
greet('Bob');

// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.
function madlib(word1, word2, word3, word4); {
  console.log (word1 + " " + word2 + " " + word3 + " " + " jumps over the " + word4 + " .")
}
madlib('quick', 'brown', 'fox', 'fence');
