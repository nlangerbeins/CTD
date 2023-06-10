// QUESTION 1. Write a standard function definition that takes 1 parameter (of data type number) and prints out the string "Happy Birthday!" to the console the same number of times as the parameter. (Each console message should be in a new line)

// EXAMPLE:
// console.log("testing out my function for Q1: ", happyBirthday(3));
//    should give you the following output in your console...
// Happy Birthday!
// Happy Birthday!
// Happy Birthday!

function happyBirthday(num) {
    for (let i = 0; i < num; i++) {
        console.log('Happy Birthday!')
    }
}

happyBirthday(3)

// QUESTION 2 (new). Write a standard function definition that takes 1 parameter. The parameter is a number and the function should return the sum of that number and all of the numbers greater than 0 below it. Example - if it was 3, it should add 3, to 1 + 2 because those are all of the numbers between 0 and 3.  Therefore it should return 6.

// EXAMPLE: 
// console.log("testing out my function for Q2: ", sum(4));
//    should give you the following output in your console...
// 10

function sum(num) {
    let res = 0;
    for (let i = 0; i <= num; i++) {
      res += i;
    }
    return res;
}
  
console.log(sum(25))


//QUESTION 3 (new). Write a standard function definition that will remove vowels from a string using a loop that takes a parameter of type string and removes all of the vowels. Test it against the variable myString which is set to "elephant".

const myString = "elephant"

// EXAMPLE:
// console.log("testing out my function for Q3: ", removeVowels(myString));
// should give you the following output in your console...
// lphnt

// a.
function removeVowels(s) {
    let res = '';
    var vowels = 'aeiou';
    for (let i = 0; i < s.length; i++) {
       if (!vowels.includes(s[i])) {
        res += s[i]
       }
    }
    return res
}



console.log(removeVowels(myString))

// console.log(myString.match(/[^aeiou]/g).join(''))
// console.log(myString.replaceAll(/[aeiou]/g, ''))


// QUESTION 4 (new). Write a function definition that takes 1 parameter. The parameter is a number and the function should return the number of odd numbers between 0 and that number, including the number. (Remember the modulo operator)

// EXAMPLE:
// console.log("testing out my function for Q4: ", oddChecker(15));
// should give you the following output in your console...
// 8

const oddChecker = (num) => {
    let res = 0;
    for (let i = 0; i <= num; i++) {
      if (i % 2 === 0) {
        res++;
      }
    } 
    return res;
}
  
console.log(oddChecker(5))


// QUESTION 5. Write a function definition that takes 1 parameter. The parameter is a string and the function should return the number of vowels in the string. 

// EXAMPLE:
// console.log("testing out my function for Q5: ", vowelsChecker('I love to code.'));
// should give you the following output in your console...
// 6

// a.
// const vowelsChecker = (s) => {
//     let res = 0;
//     let vowels = 'aeiou';
//     for (let i = 0; i < s.length; i++) {
//         if (vowels.includes(s[i])) {
//             res ++
//         }
//     }

//     return res;
// }

// b.
// const vowelsChecker = (s) => {
//     return s.match(/[aeiou]/g).length
// }

// c.
const vowelsChecker = (s) => {
    let res = 0;
    let vowels = 'aeiou';
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (s[i] == vowels[j]) {
                res++
            }
        }
    }
    return res;
}

console.log(vowelsChecker('I love to code'))

console.log('I love to code'.match(/[aeiou]/g).length)