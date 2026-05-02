// ? : ternary oparetor

const eligibleForMarried = (age: number) => {
    // if(age >= 21) return console.log('Eligble for married');
    // else return console.log('not eligible for married');

    const result = age >= 21 ? 'Eligble for married' : 'not eligible for married'

    console.log(result);
}

eligibleForMarried(21)




// nullish coalescing oparetor: undefind | null

const userTheme = 'yellow'

const defaultTheme = userTheme ?? 'Light theme'
console.log(defaultTheme);




// Result with ternary
const isauthenticated = null

const ternary = isauthenticated ? isauthenticated : 'You are guest'


// Result with nullish
const nullish = isauthenticated ?? 'You are guest'


console.log({ternary}, {nullish});