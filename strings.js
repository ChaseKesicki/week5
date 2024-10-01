let text = 'The classes are itec 1150, itec 1250, itec 2560'

let replaced = text.replace('itec', 'ITEC')  //this will replace the first instance of 'itec' with the string 'ITEC' instead
console.log(replaced)

let replacedAll = text.replace(/itec/g, 'ITEC')  // the g in /itec/g stands for global, this time selecting all instances of 'itec' in the string
console.log(replacedAll)

let message = 'The classes are 1150, 1250, 2560'
let replaceRegex = message.replace(/\d{4}/g, 'ITEC $&')  //this code tracts any instances of 4 digits, then puts 'ITEC ' in front of it
console.log(replaceRegex)