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

function convert(km) {
    return km * 0.621371;
}

let miles = convert(5)
console.log(`5 kilometers is equal to ${miles} miles`)


/* Temperature converter */

function inFarenheit(celcius) {
    return celcius * 9 / 5 + 32
}

let farenheit = inFarenheit(10)
console.log("The temperature in farenheit is " +  farenheit)


/* Mean Value */
function meanValue(values) {
    let sum = 0;
    for (let i = 0; i < values.length; i++) {
        sum += values[i]
    }
        return sum/values.length
}

let myArray = [2,4,8,6]
let myMeanValue = meanValue(myArray)
console.log('mean value: ' + myMeanValue)

/* Systembolaget */

function checkAge(age) {
  
        if(age >= 0 && age <=14) {
            return "Get out of here!"
        } 
        else if (age >= 15 && age <= 17) {
            return "Sorry, you are not old enough"
        }
        else if (age >= 18 && age <= 19) {
            return "Sorry, you must be atleast 20. Why don't you try a bar instead?"
        } 
        else if (age >= 20 && age <= 80) {
            return "Thank you! Welcome!"
        }
        else if(age > 80) {
            return "I'm sorry, where is your caretaker?"
        } 
        else {
            return "You have to enter a valid age!"
        }

}
let message = checkAge(-1)
console.log(message)

/* Sum */

function calcSum(anArray) {
    let sum = 0;
    for (let i = 0; i < anArray.length; i++) {
        sum += anArray[i]        
    }

    return sum
}

const arrayOfTen = [1,2,3,4,5,6,7,8,9,10]
let finalSum = calcSum(arrayOfTen)
console.log(finalSum)

/* List a persons' skills */

