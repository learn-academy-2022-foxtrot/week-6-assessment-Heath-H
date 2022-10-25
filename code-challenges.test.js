// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

describe("arraySentence", () => {
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized.", () => {
    let input = people
    let result = ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
    expect(arraySentence(input)).toEqual(result)
  })
})

// good fail

// b) Create the function that makes the test pass.

// Made a for loop  to iterate through the array. 
// Get the first name and last name and then make each of the first letters uppercase using .UpperCase() and .slice()
  // Push the sentence into a new array

const arraySentence = (array) => {
  let newArr = []
  for(let i=0; i<array.length; i++) {
    let firstName = array[i].name.split(" ")[0]
    let lastName = array[i].name.split(" ")[1]
    firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1)
    lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1)
    newArr.push(firstName + " " + lastName + " is " + array[i].occupation + ".") 
  }
  return newArr
}

//pass

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

describe("remainders", () => {
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
    let input1 = hodgepodge1
    let input2 = hodgepodge2
    let result1 = [ 2, 0, -1, 0 ]
    let result2 = [ 2, 1, -1 ]
    expect(remainders(input1)).toEqual(result1)
    expect(remainders(input2)).toEqual(result2)
  })
})

// // good fail

// // b) Create the function that makes the test pass.


// //make a function that divides the numbers/integers by three within the array
// // declare number to equal a number
// //use .filter to take out wanted data which will be all integers
// // use modulo 3 to get remainder

const onlyRemainders = (arr) => {
  return arr.filter((value) => typeof value === "number").map((element) => element % 3)
}



// pass


// // --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// // a) Create a test with an expect statement using the variables provided.

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125


describe("sumOfCubes", () => {
  it("takes in an array of numbers and returns the sum of all the numbers cubed.", () => {
    let input1 = cubeAndSum1
    let input2 = cubeAndSum2
    let result1 = 99
    let result2 = 1125
    expect(sumOfCubes(input1)).toEqual(result1)
    expect(sumOfCubes(input2)).toEqual(result2)
  });
})

// good fail

// b) Create the function that makes the test pass

// define a function and call it sumOfCubedNums 
// pass an array as a parameter
// create a new variable to store my result
// use for loop to iterate through each element in the array, cube it and add to the result. 
// return the sum of all the numbers cubed.

const sumOfCubedNums = (arr) => {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    result = result + (arr[i] * arr[i] * arr[i])
  }
  return result
}

//pass  