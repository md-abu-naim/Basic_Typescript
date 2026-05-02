// nullable types

const getUser = (input: string | null) => {
    if(input) console.log(`From DB: ${input}`);
    else console.log('From DB: All User');
}

getUser('naim')



// Unkwon type
const discountCalculator = (input: unknown) => {
    if(typeof input === 'number'){
        const discountPrice = input * 0.1
        console.log(discountPrice)
    }else if(typeof input === 'string'){
        const [discountPrice] = input.split(" ")
        console.log(Number(discountPrice) * 0.1);
    }else {
        console.log('Wrong input');
    }
}

discountCalculator(100)
discountCalculator('100 tk')
discountCalculator(null)



// void type : never 

const throwError = (msg: string): NavigationCurrentEntryChangeEvent => {
    throw new Error(msg)
    
}

throwError('Error....')