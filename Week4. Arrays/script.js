// QUESTION 2: Write a function that takes one Array parameter and one Number parameter and returns the element in the array at the given number index, null if it doesn't exist

// EXAMPLES:
// console.log("testing out my function for Q2: ", getElementAt([1,"a","test"], 2));
//    should result in the next line appearing in your console...
// test
//
// OR if you pass an number greater than the number of items in the array...
// console.log("testing out my function for Q2: ", getElementAt([1,"a"], 2));
// null

function getElementAt(arr, num) {
    return arr[num] || null;
}

console.log(getElementAt([1,"a","test"], 5))



// QUESTION 3: Write a function that takes one Array parameter, inserts the value `0` at the second position in the array, and returns the new Array

// EXAMPLE:
// console.log("testing out my function for Q3: ", insertZeroInArray([1,"a","test"]));
//    should result in the next line appearing in your console...
// [1, 0, 'a', 'test']

function insertZeroInArray(arr) {
    arr.splice(2, 0, '0');
    return arr;
}

console.log(insertZeroInArray([1,"a","test"]))

const fruits = ['banana', 'orange', 'kiwi', 'mango'];
fruits.splice(2, 0, 'lemon')

console.log(fruits)


// QUESTION 4: Write a function that takes two Array parameters (containing numbers or strings only) and returns true if they are equal, false if not

// HINT: In JavaScript, 1 === '1' is false, but 1 == '1' is true. You'll need to use the triple equals operator which is more strict because it compares data type.

// EXAMPLES:
// console.log("testing out my function for Q4: ", isEqual([1,2,3], [4,5,6]));
//    should result in the next line appearing in your console...
// false
//
// OR console.log("testing out my function for Q4: ", isEqual([1,2,3], [1,2,3]));
// true

function isEqual(arr1, arr2) {
    for (const i of arr1) {
        return arr1[i] === arr2[i] && arr1.length === arr2.length ? true : false
    }
}

console.log(isEqual([1,2,3], [1,2,3]))
console.log(isEqual([1,2,3], [4,5,6]))


// QUESTION 9. STRETCH GOAL --- Back in the old days, the early 2000s, this was a famous technical interview question. Write a function definition that takes no parameters. The function will loop from 1 to 15 and return an array of numbers. While looping,the function will check if the current value in the loop is divisible by 3, 5, or by both. If the current value in the loop is divisible by 3, the function will add the string "Fizz" to an array. If the current value in the loop is divisible by 5, the function will add the string "Buzz" to the array. If the current value in the loop is divisible by both, the function will add the value "FizzBuzz" to the array. The function will return the array of values.

// EXAMPLE:
// console.log("testing out my function for Q9: ", fizzBuzz();
//    should result in the next line appearing in your console...
// [1,2,'Fizz',4,'Buzz','Fizz',7,8,'Fizz','Buzz',11,'Fizz',13,14,'FizzBuzz']

const fizzBuzz = () => {
    let arr = [];
    for (let i = 1; i <= 15; i++) {
      if (i % 3 == 0 && i % 5 == 0) {
        arr.push('FizzBuzz');
      } else if (i % 3 == 0) {
        arr.push('Fizz');
      } else if (i % 5 == 0) {
        arr.push('Buzz');
      } else {
        arr.push(i)
      }
    }
    return arr
}

console.log(fizzBuzz())
  



// 1. Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”. That is: removes all dashes, each word after dash becomes uppercased.

//camelize("background-color") == 'backgroundColor';
//camelize("list-style-image") == 'listStyleImage';
//camelize("-webkit-transition") == 'WebkitTransition';
const camelize = (str) => {
  return str.split('-').map((el, i) => i == 0 ? el : el[0].toUpperCase() + el.slice(1)).join('')
}

console.log(camelize("background-color"))


// 2. Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array. The function should not modify the array. It should return the new array.

let arr = [5, 3, 8, 1];

const filterRange = (arr, a, b) => {
  return arr.filter(el => el >= a && el <= b)
}

let filtered = filterRange(arr, 1, 4);

console.log( filtered ); // 3,1 (matching values)
console.log( arr ); // 5,3,8,1 (not modified)


// 3. Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b. The function should only modify the array. It should not return anything.

let arr2 = [5, 3, 8, 1];

const filterRangeInPlace = (arr, a, b) => {
   for (let i = 0; i < arr.length; i++) {
    let res = arr[i];
    if (res < a || res > b) {
      arr.splice(i, 1)
    }
   }
}

filterRangeInPlace(arr2, 1, 4); // removed the numbers except from 1 to 4
console.log( arr2);


// 4. Sort in decreasing order
let arr3 = [5, 2, 1, -10, 8];

const sortDecreasing = (arr) => {
  return arr.sort((a, b) => b - a)
}

console.log(sortDecreasing(arr3)); // 8, 5, 2, 1, -10


// 5. We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified. nCreate a function copySorted(arr) that returns such a copy.

let arr4 = ["HTML", "JavaScript", "CSS"];

const copySorted = (arr) => {
  // return [...arr].sort()
  return arr.slice().sort()
}

let sorted = copySorted(arr4);

console.log( sorted ); // CSS, HTML, JavaScript
console.log( arr4 ); // HTML, JavaScript, CSS (no changes)


// 6. You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

// let names = users.map(el => el.name)

// console.log( names ); 


// 7. You have an array of user objects, each one has name, surname and id. Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = users.map(el => ({
  fullName: `${el.name} ${el.surname}`,
  id: el.id
}))

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

console.log(usersMapped)
console.log( usersMapped[0].id ) // 1
console.log( usersMapped[0].fullName ) // John Smith