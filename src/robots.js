


let problem = `

    __
  __|
__|


`

// while loop
// recursive
// no loop, no variables



// Write a function that takes in two arrays of numbers and multiplies them
// together as if they were whole numbers. Return the result of the multiplicaiton.

// You may NOT concat the arrays

function multiply(a, b) {
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      result += a[i] * b[i] * Math.pow(10, (a.length-1 + b.length-1 - i - j))
    }
  }
  return result
}

console.log(multiply([2, 8, 3], [2, 7]))
