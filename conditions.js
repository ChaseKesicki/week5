//pre-requisites for Android programming - C# ir Java

let takenCsharp = false
let takenJava = true

if (takenCsharp || takenJava) {  // || checks if they have taken csharp AND/OR taken java
    console.log('You meet the pre-requisites for Android')
} else  { 
    console.log('You must take C# or Java')
}

//To be a senator, there are 3 requirements
//You must be at least 30 years old
//You must be a citizen for at least 9 years
//You must live in the state you want to represent

let age = 35
let usCitizenTime = 35
let stateOfResidence = 'Wisconsin'
let stateWantToRepresent = 'Minnesota'

if (age >= 30 && usCitizenTime >= 9 && stateOfResidence == stateWantToRepresent) {
    console.log('You are eligable to be a senator')
} else {
    console.log('Sorry, you are not eligable')
}