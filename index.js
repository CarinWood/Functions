/* Greeting */

function greeting() {
    console.log('Hello there my friend!')
}


/* Greeting with name*/

function greetingWithName(name) {
   console.log("Hello there my friend! You must be " + name)
}


/* addition */

function addition(num1, num2) {
    return num1 + num2
}

let sum = addition(1, 2)
console.log(sum)


/* Division */

function division(num1, num2) {
    if(num2 === 0) {
        console.log('You can\'t divide by zero!')  
    } else {
        return num1 / num2
    }
}

let res = division(1, 2)
console.log(res)

/* Area */

function calcArea(a, b) {
    return a*b
}

let areaResult = calcArea(20, 30)
console.log(areaResult)


/* Greeting with name again */

function greetingAgain(first, last) {
    return `Hello ${first} ${last}! How are you doing?`
}

console.log(greetingAgain('Carin', 'Wood'))

/* Distance converter */

