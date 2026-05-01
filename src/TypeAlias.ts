// Type Alias
// In object type alias

// wrong way
const user: {
    name: string,
    age: number,
    education: string
} = {
    name: 'Naim',
    age: 22,
    education: 'Graduate'
}



type User = {
    name: string,
    age: number,
    education: string
}


const user2: User = {
    name: 'Naim',
    age: 22,
    education: 'Graduate'
}


// type alias in function
type AddFunc = (num1:string, num2:string) => string

const add: AddFunc = (num1, num2) => num1 + num2