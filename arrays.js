let animals = ['lion', 'tiger', 'cheetah'] // Array

console.log(animals)
console.log(animals[1])  //Square brackets can select specific item from array
console.log(animals[1000])  //Will return undefined if there is no item

animals[3] = 'giraffe' //You can manually add specific items to arrays in specific locations
console.log(animals)
console.log(animals[5])

animals[1] = 'zebra'
console.log(animals[1])

animals.push('elephant')  //Push adds an item to the end of an array
console.log(animals)

let lastAnimal = animals.pop()  //Removes last item from the array
console.log(lastAnimal)
console.log(animals)

animals.unshift('deer')  //unshift adds an item to the start of an array
console.log(animals)

let firstAnimal = animals.shift()  //shift removes elements from the start of an array
console.log(firstAnimal)
console.log(animals)

animals.reverse()  //reverses index
console.log(animals)

animals.sort()  //sorts in alphabetical order
console.log(animals)

let numberOfAnimals = animals.length  //says how many items in list
console.log(numberOfAnimals)

console.log(animals.indexOf('lion')) //finds where and if something is in the array
//will return -1 if not in array
if(animals.indexOf('walrus') == -1) {
    console.log('walrus is not in the aray')
}

if(animals.includes('cheetah')) {
    console.log('cheetah is in the array')
}

console.log(animals.join(' * ')) //joins array items together with a set string in between

animals.forEach( function(animal) {  //for loop that selects each item in array
    console.log(animal.toUpperCase())
})

animals.forEach(function(animal) {  
    console.log(animal.length)  
})

let animalNameLength = []

animals.forEach( function(animal) {
    let length = animal.length
    animalNameLength.push(length)
})

console.log(animalNameLength)