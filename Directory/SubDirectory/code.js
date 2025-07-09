// Example of an immediately invoked function expression (IIFE)
;(() => {
  console.log('IIFE is executed.')
})()

// Simulating some API data
const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' },
        { id: 3, name: 'James Johnson' }
      ])
    }, 1000)
  })
}

// Async function to get data
const getData = async () => {
  try {
    const data = await fetchData()
    console.log(data)
  } catch (error) {
    console.error('Error fetching data', error)
  }
}

// Example of using fetch with async/await
const fetchUsers = async (url) => {
  try {
    const response = await fetch(url)
    const users = await response.json()
    return users
  } catch (error) {
    console.error('Error fetching users:', error)
  }
}

// Utility function for summing numbers
const sum = (a, b) => a + b

// A more complex function that uses the sum utility
const calculateTotal = (prices) => {
  return prices.reduce((total, price) => sum(total, price), 0)
}

// Event handler example
const button = document.getElementById('myButton')
button.addEventListener('click', () => {
  console.log('Button was clicked.')
})

// DOM manipulation example
const updateHeaderText = (text) => {
  const header = document.querySelector('h1')
  header.textContent = text
}

// Simulated class constructor pattern
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

// Example of exporting a module
export const utils = {
  fetchData,
  getData,
  fetchUsers,
  sum,
  calculateTotal,
  updateHeaderText,
  Person
}

// A loop to simulate multiple functions or methods
for (let i = 1; i <= 20; i++) {
  window[`dummyFunction${i}`] = () =>
    console.log(`Dummy function ${i} executed.`)
}

// Dummy data array
const dummyData = new Array(20).fill(null).map((_, index) => ({
  id: index,
  value: `Dummy data ${index + 1}`
}))

// More complex data structure with nested objects and arrays
const complexData = [
  {
    id: 1,
    title: 'Complex Data Title 1',
    details: {
      description: 'This is a description for Complex Data 1',
      isActive: true
    },
    tags: ['tag1', 'tag2', 'tag3']
  }
  // ... more complex data objects
]

// Function that works with complex data structure
const processComplexData = (data) => {
  data.forEach((item) => {
    console.log(`Processing item with id: ${item.id}`)
    if (item.details.isActive) {
      console.log(`Item ${item.id} is active`)
    }
  })
}

// Simulating error handling in a try-catch block
const riskyOperation = () => {
  try {
    // Code that may throw an error
    throw new Error('Simulated error')
  } catch (error) {
    console.error('An error occurred:', error.message)
  }
}

// A function to demonstrate default parameters
const greet = (name = 'Stranger') => {
  console.log(`Hello, ${name}!`)
}

// Example of destructuring assignment
const userInfo = ({ firstName, lastName, email }) => {
  console.log(`Name: ${firstName} ${lastName}, Email: ${email}`)
}

// Example of a higher-order function that returns another function
const multiplier = (factor) => {
  return (number) => number * factor
}

// Generating a series of multiplier functions
const doubler = multiplier(2)
const tripler = multiplier(3)
const quadrupler = multiplier(4)

// Example of a template literal and string interpolation
const createEmail = (name, price) => {
  return `Dear ${name}, the price is $${price.toFixed(2)}.`
}

// Functions to simulate CRUD operations
const createItem = (item) => {
  console.log('Creating item:', item)
}

const readItem = (id) => {
  console.log('Reading item with ID:', id)
}

const updateItem = (id, updates) => {
  console.log(`Updating item with ID: ${id}`, updates)
}

const deleteItem = (id) => {
  console.log('Deleting item with ID:', id)
}

// Function that uses rest parameters
const logArguments = (...args) => {
  console.log('Function arguments:', args)
}

// Simulating common array methods
const numbers = [1, 2, 3, 4, 5]
const doubledNumbers = numbers.map((n) => n * 2)
const evenNumbers = numbers.filter((n) => n % 2 === 0)
const numbersSum = numbers.reduce((sum, n) => sum + n, 0)

// Function that demonstrates usage of the spread operator
const combineArrays = (arr1, arr2) => {
  return [...arr1, ...arr2]
}

// Using Set to remove duplicates from an array
const removeDuplicates = (array) => {
  return [...new Set(array)]
}

// Simulating a simple mixin with Object.assign
const mixin = (target, ...sources) => {
  Object.assign(target, ...sources)
}

// Example of a simple regular expression
const validateEmail = (email) => {
  const re = /\S+@\S+\.\S+/
  return re.test(email)
}

// A function to demonstrate error throwing
const failIfInvalid = (value) => {
  if (!value) {
    throw new Error('Invalid value!')
  }
  console.log('Valid value:', value)
}
