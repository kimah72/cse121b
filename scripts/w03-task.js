/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
function subtract(number1, number2) {
    return number1 - number2;
}

function subtractNumbers() {
    
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */

const multiplyNumbers = () => document.querySelector("#product").value = Number(document.querySelector("#factor1").value) * Number(document.querySelector("#factor2").value);
document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */

const divideNumbers = () => document.querySelector("#quotient").value = Number(document.querySelector("#dividend").value) / Number(document.querySelector("#divisor").value);
document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */

const date = new Date();
const year = date.getFullYear() ;

let currentYear = '2023';
const yearElement = document.querySelector('#year');
yearElement.textContent = currentYear;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector('#array').innerHTML = numbersArray

/* Output Odds Only Array */

document.querySelector('#odds').innerHTML = numbersArray.filter(number => number % 2 === 1)

/* Output Evens Only Array */

document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */

document.querySelector('#sumOfArray').innerHTML = numbersArray.reduce((sum, number) => sum + number)

/* Output Multiplied by 2 Array */

document.querySelector('#multiplied').innerHTML = numbersArray.map(number => number * 2)

/* Output Sum of Multiplied by 2 Array */

const doubledNumbers = numbersArray.map((number) => number * 2);
const sum = doubledNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const sumOfMultipliedElement = document.getElementById("sumOfMultiplied");
document.querySelector('#sumOfMultiplied').innerHTML = sum