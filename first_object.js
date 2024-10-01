let user = { username: 'Chase', password: 'Pizza'}  //This is an object.  Its like a list, but can have multiple values per entry

console.log(user.username) //both these methods can select elements from the object
console.log(user['username'])

console.log(user.password)
console.log(user['password'])

let whatProperty = 'password'
console.log(user[whatProperty])

let usernameProperty = 'username'
console.log(user[usernameProperty])

user.password = 'elephant'  //you can change elements in an object
console.log(user)

user['password'] = 'alligator'
console.log(user)

user.email = 'chase.kesicki@gmail.com'  //you can freely add elements as well
console.log(user)
console.log(user.email)