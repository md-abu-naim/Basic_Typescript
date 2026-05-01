// Object Destructuring

const user = {
    name: 'Naim',
    age: 22,
    education: 'Graduate'
}

const {name: myFullName} = user
console.log(myFullName);


// Array Destructuring

const friends = ['Rahim', 'Karim', "Babul"]

const friend = friends[1]

const [,, myBestFriends] = friends

console.log(friend, myBestFriends);