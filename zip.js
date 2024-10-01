function isMinnesotaZip(code) {
    //all MN zip codes are between 55001 and 56763
    if (code >= 55001 && code <= 56763) {  //checks to see if zip code is a minnesota zipcode
        return true
    } else {
        return false
    }
}


console.log(isMinnesotaZip('55403'))
console.log(isMinnesotaZip('55001'))
console.log(isMinnesotaZip('56763'))
console.log(isMinnesotaZip('99999'))
console.log(isMinnesotaZip('1'))

function isGPAvalid(code){  //same thing as zip code, but this time checking to see if its a valid GPA
    if (code >= 0 && code <= 4) {
        return true
    } else {
    return false
    }
}

console.log(isGPAvalid(5))
console.log(isGPAvalid(3))
 

function cityStateAddress(city, state) {  
    let address = `${city}, ${state.toUpperCase()}`  //this function displays a city and state in correct notation
    return address
}

console.log(cityStateAddress('Minneapolis', 'mn'))
let address = cityStateAddress('Seattle', 'WA')
console.log(address)