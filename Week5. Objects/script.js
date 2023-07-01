const library = [
    {
      title: 'The Road Ahead',
      author: 'Bill Gates',
      libraryID: 1254,
    },
    {
      title: 'Walter Isaacson',
      author: 'Steve Jobs',
      libraryID: 4264,
    },
    {
      title: 'Mockingjay: The Final Book of The Hunger Games',
      author: 'Suzanne Collins',
      libraryID: 3245,
    },
    {
      title: 'Alchemist',
      author: 'Paulo Coelho',
      libraryID: 4266,
    }
  ];
  
  // QUESTION 4: Write a function called "sortArray" that takes one Array parameter and returns a new Array that is sorted by "libraryID" in ascending order (low to high)

// EXAMPLE:
// console.log("testing out my function for Q4: ", sortArray(library));
//    should result in the next several lines appearing in your console...
// [
//   { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 },
//   {
//     title: 'Mockingjay: The Final Book of The Hunger Games',
//     author: 'Suzanne Collins',
//     libraryID: 3245
//   },
//   { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 },
//   { title: 'Alchemist', author: 'Paulo Coelho', libraryID: 4266 }
// ]

const sortArray = (arr) => {
    return arr.sort((a, b) => a.libraryID - b.libraryID)
  }
  
  console.table(sortArray(library))

// QUESTION 5: Write a function called "addTypeProperty" that takes one Array parameter and returns a new Array where each Object has a new property called "type" with value "book"

const addTypeProperty = (arr) => {
    return arr.map((el) => ({
      ...el,
      type: 'book'
    }))
}
  
console.table(addTypeProperty(library))

// QUESTION 6: Write a function called "addNewObject" that takes one Array parameter and one Object parameter and returns a new Array with the new Object inserted at the end

const addNewObject = (arr, obj) => {
    arr.push(obj)
    return arr;
}
  
console.log(addNewObject(library, {title:'The Wizard of Oz',author:'L.Frank Baum',libraryID: 9876}))




