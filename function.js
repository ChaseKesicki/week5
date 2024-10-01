
//Functions can be used to solve problems or do things many times
function shout(text) { 
    let shouty_text = text.toUpperCase() + '!!!'
    return shouty_text  //this function makes text uppercase and adds exclamation points
}

console.log(shout('hello world'))
let message = shout('hello web programmers')
console.log(message)

function f_to_c(f, decimalPlaces) {  //This function converts farenheight temperatures to celcius
    let celsius = (f - 32) * 5 / 9
    if (decimalPlaces) { // undefined values are considered false
        return celsius.toFixed(decimalPlaces)  //limits how many decimal places the temperature can have
    } else {
        return celsius
    }
    }


let todayTemp = 75
todayCelsius = f_to_c(todayTemp, 4)
console.log(todayCelsius)