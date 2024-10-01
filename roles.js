let user = {
    name : 'chase',
    password : 'pizza',
    email : 'chase.kesicki@gmail.com',
    roles : ['programmer', 'gamer'], //you can have arrays and more objects nested inside objects
    contact : {
        office : 'M1234',
        telephone : '612-412-0969'
    }
}


user.salary = 12345
user.roles.push('server admin')
user.contact.location = 'Minneapolis'

console.log(user)