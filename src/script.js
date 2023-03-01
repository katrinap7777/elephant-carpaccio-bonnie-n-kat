// const promptResult = window.prompt("How are you today?");

// alert(`You are feeling ${promptResult}`);

// 1 Issue
const question1 = ("How many items would you like today?");
const promptIssue1 = window.prompt("How many items would you like today?");
console.log(promptIssue1);

alert(`You have selected ${promptIssue1}`);

// 2 Issue

const question2 = ("Do you want to know the product pre-tax price?");
const promptIssue2 = window.prompt("Do you want to know the product price before tax?");
console.log(promptIssue2);
console.log("$15.00");
const productPreTaxPrice = 15;
alert(`Your product price before tax is $ ${productPreTaxPrice} .00`);

// 2.5 Issue
// Tax rates
const UT = 0.0685;
const NV = 0.08;
const TX = 0.0625;
const AL = 0.04;
const CA = 0.0825;

// default sticking to UT

const formulaTaxAmountOnly = (`${productPreTaxPrice}*${UT}`);
console.log(formulaTaxAmountOnly);

// function multiplyBy()
// {
//         num1 = document.getElementById("firstNumber").value;
//         num2 = document.getElementById("secondNumber").value;
//         document.getElementById("result").innerHTML = num1 * num2;
// }
const num1 = productPreTaxPrice;
const num2 = UT;

const multiplyBy = (num1, num2) => {

        // const result = num1 * num2;
        // console.log(result);
        return(num1*num2);
}

// multiplyBy();
console.log(multiplyBy);

// console.log(productPreTaxPrice  * UT);
// Expected output: 12
// 3 Issue

const question3 = ("Do you want to know the tax amount on the product?");
const promptIssue3 = window.prompt("Do you want to know the tax amount on the product?");
console.log(promptIssue3);


// https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-10.php


function multiplyBy()
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 * num2;
}

alert(`${multiplyBy}`);
// function MULTIPLY (price, shipping) {
//     return price*shipping;

//     enter code here

//     product=number1*number2;

//     //return the result

//     return total;

    


// <script>
//     function multiplyNumbers(x,y){
//         return x*y;
//     }
//     var z= multiplyNumbers(4,5); // Function is called, return value will end up in z

// </script>
// <button onclick="document.getElementById('multiplication').innerHTML=z;">Multiply numbers</button>
// <p id="multiplication"></p>

// Issue 4

const question5 = ("Would you like to know the product total price for 1x item?");
const promptIssue5 = window.prompt("Would you like to know the product total price for 1x item?");
console.log(promptIssue5);

// const num1 = productPreTaxPrice;
// const num2 = UT;

// const multiplyBy = (num1, num2) => {
   

//         // const result = num1 * num2;
//         // console.log(result);
//         return(num1*num2)
// }

// multiplyBy();
// console.log(multiplyBy);


// alert(`Your product price include tax is ${} `);

// As a buyer,
// I want the product price plus tax,
// so that I know the tax amount for their state.
// Expected Inputs
// What state they are in as a question
// Expected outputs
// their state tax amount per product.

// const UT = 0.0685;
// const productPreTaxPrice = 15;



// const productPriceResultPlusTax = (digit) => {
//     const{UT, productPreTaxPrice} = 
// }