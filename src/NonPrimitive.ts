// TS Non Primitive Data Types

let bazarList = ['eggs', 'milk', 'sugar']

// bazarList.push(23) // error
// bazarList.push(true) // error
bazarList.push('apple') // it's right bcz the type is string


let mixed: (number | string)[] = ['eggs', 45, 'milk', 2]

// mixed.push(true) // error
mixed.push('orange', 12) // right



// TS - tuple

let coordinates: [number, number] = [11, 52]
// let coordinate: [number, number] = [11, 52, 52] // wrong bcz its tuple

let couple: [string, string] = ['Husband', 'Wife']

let nameAndRole: [string, number] = ['Naim', 12]


let destinations : [string, string, number] = ['Noakhali', 'Dhaka', 3]