/* Lab: write the code requested by lines marked //TODO
You should NOT modify any of the code that's here already. Add the code requested.   */

console.log('For this lab, please write the code requested at the //TODO markers.')

/* a. Use this JavaScript object. This represents the current position of the International Space Station
at 1pm on January 12th 2018, fetched from http://api.open-notify.org/iss-now.json.
 */

let iss_location = {
  "timestamp": 1515784140,
  "iss_position":
    {
      "latitude": "49.2167",
      "longitude": "100.5363"
    },
  "message": "success"
}

// TODO Extract the latitude value, and log it to the console.
// TODO Extract the longitude value, and log it to the console.
let issLatitude = iss_location.iss_position.latitude
console.log(issLatitude)
let issLongitude = iss_location.iss_position.longitude
console.log(issLongitude)



/* b. Use this JavaScript object of exchange rates relative to Euros.
The properties are currency symbols, the values are the exchange rates.
Data source: http://fixer.io/
* */


let rates = {
    "AUD": 1.5417,
    "BGN": 1.9558,
    "BRL": 3.8959,
    "CAD": 1.5194
}

// TODO write code to add a new property for Swiss Francs. Symbol is CHF, value is 1.1787.
// TODO if you had 100 Euros, write code to get the exchange rate from the object, then calculate 
//      the equivalent value in Australian Dollars (AUD)
rates.CHF = 1.1787
function EurosConversion(object) {
    let conversion = 100 * object
    return conversion.toFixed(2)
}
console.log(EurosConversion(rates.AUD))


/* c. Use this JavaScript array of objects of cat owners, and their cats. Source, moderncat.com
 */

let cats_and_owners = [
  { name: "Bill Clinton", cat: "Socks" },
  { name: "Gary Oldman", cat: "Soymilk" },
  { name: "Katy Perry", cat: "Kitty Purry" },
  { name: "Snoop Dogg", cat: "Miles Davis" }
]

// TODO Taylor Swift's cat is called 'Meredith'. Write code to add this data to the array.
let taylorSwift = {name: "Taylor Swift", cat: "Merideth"}
cats_and_owners.push(taylorSwift)
console.log(cats_and_owners)
// TODO write a loop to print each cat owner, and their cat's name, one per line. Use the forEach style.
//   Each line should have a message like "Snoop Dogg's cat is called Miles Davis"
cats_and_owners.forEach( function(catDescription) {
    //catDescription.innerHTML = cats_and_owners.name + "'s cat is named " + cats_and_owners.cat
    console.log(catDescription.name + "'s cat is named " + catDescription.cat)
})
// TODO print Gary Oldman's cat's name by reading the data in the appropriate array index, using [] notation
//let garyOldmanCatArrayIndex = cats_and_owners.
let garyOldman =  cats_and_owners[1]
console.log(garyOldman.cat)
// TODO print Gary Oldman's cat's name by looping over the array until you find the object with name = "Gary Oldman"
cats_and_owners.forEach( function(ownerAndCat){
  let owner = ownerAndCat.name
  if (owner == 'Gary Oldman') {
    console.log(ownerAndCat.cat)
  }
})


/* d. Use the following JSON object, describing the Nobel Prize winners in 2017.
Source http://api.nobelprize.org/v1/prize.json?year=2017
* */

// TODO print the full name of the Literature Nobel laureate.
// TODO print the ids of each of the Physics Nobel laureates. Your code should still work without modification if a laureate was added, or removed.
// TODO write code to print the names of all of the prize categories (So your output would start physics, chemistry, medicine... ).
// TODO write code to print the total number of prize categories
// TODO write code to count the total number of laureates from 2017. 
//   have a good look at how the JSON is structured, and think about what loop(s) you'll need to write.


let nobel_prize_winners_2017 = {
  "prizes":[
    {
      "year":"2017",
      "category":"physics",
      "laureates":[
        {
          "id":"941",
          "firstname":"Rainer",
          "surname":"Weiss",
          "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
          "share":"2"
        },
        {
          "id":"942",
          "firstname":"Barry C.",
          "surname":"Barish",
          "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
          "share":"4"
        },
        {
          "id":"943",
          "firstname":"Kip S.",
          "surname":"Thorne",
          "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
          "share":"4"
        }
      ]
    },
    {
      "year":"2017",
      "category":"chemistry",
      "laureates":[
        {
          "id":"944",
          "firstname":"Jacques",
          "surname":"Dubochet",
          "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
          "share":"3"
        },
        {
          "id":"945",
          "firstname":"Joachim",
          "surname":"Frank",
          "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
          "share":"3"
        },
        {
          "id":"946",
          "firstname":"Richard",
          "surname":"Henderson",
          "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
          "share":"3"
        }
      ]
    },
    {
      "year":"2017",
      "category":"medicine",
      "laureates":[
        {
          "id":"938",
          "firstname":"Jeffrey C.",
          "surname":"Hall",
          "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
          "share":"3"
        },
        {
          "id":"939",
          "firstname":"Michael",
          "surname":"Rosbash",
          "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
          "share":"3"
        },
        {
          "id":"940",
          "firstname":"Michael W.",
          "surname":"Young",
          "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
          "share":"3"
        }
      ]
    },
    {
      "year":"2017",
      "category":"literature",
      "laureates":[
        {
          "id":"947",
          "firstname":"Kazuo",
          "surname":"Ishiguro",
          "motivation":"\"who, in novels of great emotional force, has uncovered the abyss beneath our illusory sense of connection with the world\"",
          "share":"1"
        }
      ]
    },
    {
      "year":"2017",
      "category":"peace",
      "laureates":[
        {
          "id":"948",
          "firstname":"International Campaign to Abolish Nuclear Weapons (ICAN)",
          "motivation":"\"for its work to draw attention to the catastrophic humanitarian consequences of any use of nuclear weapons and for its ground-breaking efforts to achieve a treaty-based prohibition of such weapons\"",
          "share":"1",
          "surname":""
        }
      ]
    },
    {
      "year":"2017",
      "category":"economics",
      "laureates":[
        {
          "id":"949",
          "firstname":"Richard H.",
          "surname":"Thaler",
          "motivation":"\"for his contributions to behavioural economics\"",
          "share":"1"
        }
      ]
    }
  ]
}
// TODO print the full name of the Literature Nobel laureate.
let prizesList = nobel_prize_winners_2017.prizes
let prizesLiterature = prizesList[3]
let litLaurettes = prizesLiterature.laureates[0]

let litFirstName = litLaurettes.firstname
let litLastName = litLaurettes.surname
console.log(litFirstName + ' ' + litLastName)

// TODO print the ids of each of the Physics Nobel laureates. Your code should still work without modification if a laureate was added, or removed.
let prizesPhysics = prizesList[0]
let physicsLaureates = prizesPhysics.laureates
console.log(physicsLaureates)
let physicIds = []
physicsLaureates.forEach( function (id) {
    physicIds.push(physicsLaureates.id)
})  //NEED TO FIX LOOP SO IT SELECTS ID
console.log(physicIds)
// TODO write code to print the names of all of the prize categories (So your output would start physics, chemistry, medicine... ).
let Names = []
prizesList.forEach( function( categoryNames) {
    Names.push(prizesList.name)
}) //NEED TO FIX LOOP SO IT SELECTS NAMES
console.log(Names)
// TODO write code to print the total number of prize categories
howManyCategories = Names.length
console.log(howManyCategories)
// TODO write code to count the total number of laureates from 2017. 
//   have a good look at how the JSON is structured, and think about what loop(s) you'll need to write.
//NEED TO FIGURE OUT HOW TO DO