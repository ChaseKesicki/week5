console.log('Hello World!')

//Three ways to create variables
let color = 'blue'
var size = 'medium'  //not recommended
const language = 'JavaScript'  // can change this value
// language = 'C#'
// language = 'C#' is an error

let quantity = 5
let distance = 4.5

let text = 'Hello World'
let message = 'Hi Programmers'

console.log('There are ' + quantity + ' programmers')
let todayTemp = 75

console.log("Today's temperature is " + todayTemp + "F")

let tempC = (todayTemp - 32) * 5 / 9
console.log('Today\'s temperature is ' + tempC.toFixed(2) + 'C')
console.log(`Today's temperature is ${tempC.toFixed(2)}C which is equvalent to ${todayTemp}F`)

let className = 'Web Programming'
let classCode = 2560
let department = 'ITEC'

console.log(`This class is ${department} ${classCode} ${className}`)