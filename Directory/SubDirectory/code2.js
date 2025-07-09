// Example of Array destructuring
const [first, second, , fourth] = [10, 20, 30, 40]
console.log(first, second, fourth) // Outputs: 10 20 40

// Example of Object destructuring
const {
  title,
  details: { description }
} = complexData[0]
console.log(title, description)

// A simple memoization function
const memoize = (fn) => {
  const cache = {}
  return (...args) => {
    const stringifiedArgs = JSON.stringify(args)
    if (!cache[stringifiedArgs]) {
      cache[stringifiedArgs] = fn(...args)
    }
    return cache[stringifiedArgs]
  }
}

// Example of using the memoization function
const factorial = memoize((x) => {
  if (x === 0) {
    return 1
  }
  return x * factorial(x - 1)
})

// Example of a tagged template literal function
const highlight = (strings, ...values) => {
  return strings.reduce((result, string, i) => {
    return `${result}${string}<strong>${values[i] || ''}</strong>`
  }, '')
}

// Using the tagged template literal function
const highlightedText = highlight`This ${'text'} will be ${'highlighted'}.`

// Function that demonstrates the use of closure
const makeCounter = () => {
  let count = 0
  return () => {
    count += 1
    console.log(count)
  }
}

// Using the closure
const counter = makeCounter()
counter() // Outputs: 1
counter() // Outputs: 2

// Example of a simple curried function
const add = (a) => (b) => a + b
const addFive = add(5)
console.log(addFive(10)) // Outputs: 15

// Simulated complex curried function for adding multiple numbers
const addMoreNumbers = (a) => (b) => (c) => (d) => a + b + c + d

// Example of using Set to store unique values
const uniqueNumbers = new Set()
;[1, 2, 3, 4, 5, 1, 2].forEach((num) => uniqueNumbers.add(num))

// A simple Observer pattern implementation
class EventObserver {
  constructor() {
    this.observers = []
  }

  subscribe(fn) {
    this.observers.push(fn)
  }

  unsubscribe(fn) {
    this.observers = this.observers.filter((subscriber) => subscriber !== fn)
  }

  broadcast(data) {
    this.observers.forEach((subscriber) => subscriber(data))
  }
}

// Using the Observer
const observer = new EventObserver()

const logData = (data) => console.log('Received data:', data)
observer.subscribe(logData)

observer.broadcast({ data: 'some data' }) // logData is called with broadcasted data

// More realistic setTimeout example
setTimeout(() => {
  console.log('This simulates a delayed operation like a network request.')
}, 2000)

// Creating a promise that resolves after a delay
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

// Using the promise to simulate delay
delay(3000).then(() => console.log('Delayed for 3 seconds'))

// Example of a switch statement
const getDayOfWeek = (dayNumber) => {
  switch (dayNumber) {
    case 1:
      return 'Monday'
    case 2:
      return 'Tuesday'
    case 3:
      return 'Wednesday'
    // ... more cases for each day of the week
    default:
      return 'Unknown'
  }
}

// Usage of Map for storing key-value pairs
const userSettings = new Map()
userSettings.set('theme', 'dark')
userSettings.set('notifications', 'enabled')

// More complex logic inside a function
const processUserInput = (input) => {
  const processedInput = input.trim().toLowerCase()
  // Simulate processing the input
  console.log(`Processed input: ${processedInput}`)
}

// Function demonstrating default parameters and template strings
const createGreeting = (name, age = 30) =>
  `Hello, my name is ${name} and I am ${age} years old.`

// Example of a rest parameter with function overloading behavior
const overloadedFunction = (...params) => {
  if (params.length === 1) {
    // one parameter logic
  } else if (params.length === 2) {
    // two parameters logic
  } else {
    // default logic
  }
}

// Spread operator in function calls
const numbersToPass = [1, 2, 3]
const maximumNumber = Math.max(...numbersToPass)

// More DOM manipulation
const createListItems = (items) => {
  const list = document.createElement('ul')
  items.forEach((item) => {
    const listItem = document.createElement('li')
    listItem.textContent = item
    list.appendChild(listItem)
  })
  return list
}

// Demonstrating async/await with fetch API
const fetchMoreData = async () => {
  try {
    const response = await fetch('https://api.example.com/data')
    const data = await response.json()
    console.log('Fetched data:', data)
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

// Fetching and displaying data from an API
const displayData = async () => {
  const data = await fetchData()
  document.getElementById('data-container').innerText = JSON.stringify(
    data,
    null,
    2
  )
}
