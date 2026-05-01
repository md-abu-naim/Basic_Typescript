// Spread oparator

const friends = ['Rahim', 'Karim', "Babul"]

const sclFriends = ["Salam", "Kalam", "Rahim"]

const clgFriends = ["Abul", "Babul", "Sintu"]


friends.push(...sclFriends)
friends.push(...clgFriends)

console.log(friends);


const user = {
    name: 'Naim',
    age: 22,
    education: 'Graduate'
}

const otherInfo = {
    color: 'Black',
    phone: '0155588'
}


const userInfo = {...user, ...otherInfo}

console.log(userInfo);




// Rest Oparator

const SendInvite = (...friends: string[]) => {
    friends.forEach((friend: string) => console.log(`Send invite to ${friend}`))
}

SendInvite('Kabul', 'Dabul', "chabul", 'Tabul')
