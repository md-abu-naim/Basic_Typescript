// Normal Function

function add(num1: number, num2: number): number{
    return num1 + num2
}

add(5, 5)



// Arrow Function
const addArrow = (num1: number, num2: number): number => num1 + num2

addArrow(2, 2) 



// Object => function => method

const poorUser = {
    name: 'naim',
    balance: 70,
    addBalance(newBalance: number): number{
        const total = this.balance + newBalance
        return total
    }
}

poorUser.addBalance(52)



// Loop function
const arr: number[] = [10, 5, 41, 85]

const sqrArray = arr.map((elem: number): number => elem * elem)