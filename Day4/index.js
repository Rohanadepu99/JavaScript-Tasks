// Task 1: Print Even Numbers from 1 to 20
// Scenario: Write JavaScript code that prints all even numbers from 1 to 20.
// Instructions:
// Use a for loop to iterate from 1 to 20.
// Use an if statement to check if a number is even and print it.

// let num1=+prompt("Enter your Starting Number for printing Even Numbers")
// let num2=+prompt("Enter your Ending Number for printing Even Numbers")
// let off = 0
// if(num1>num2){
//     num1=num1
//     num2=num2
// }
// else{
//     off = num1
//     num1 = num2
//     num2 = off

// }
// console.log(num1,num2)



// let num1 = +prompt("Enter your Starting Number for printing Even Numbers");
// let num2 = +prompt("Enter your Ending Number for printing Even Numbers");
// if(num1<num2){
//     temp = num1
//     num1 = num2;
//     num2 = temp;
// }
//  console.log(num1,num2)

// console.log(`number1----${num1}  num2-----${num2}')


// Task 2: Print Multiples of 5 up to 50
// Scenario: Write JavaScript code that prints all multiples of 5 up to 50.
// Instructions:
// Use a for loop to iterate from 1 to 50.
// Use an if statement to check if a number is a multiple of 5 and print it.

let req=+prompt("Enter your required Number : ")
let num=+prompt("Enter Your range : ")
for(i=1;i<=num;i++){
    if(i%req==0){
        console.log(i)
    }
}
// Task 3: Create a JavaScript program that calculates the factorial of a given number using a for loop.
// Instructions:
// Use a for loop to multiplication the given 
// Take prompt from the user
// hint: take count value as 1;
// 5*4*3*2*1

let fac=prompt("Enter a Number")
let mult=1
for(i=fac;i>0;i--){
    mult*=i
}
console.log(mul)


// Task 5:Write a JavaScript script that uses nested loops to 
// print a multiplication table for numbers 1 through 5.

// Instructions:
// use for loop
// use nested loop


let mul=prompt("Enter your range for tables : ")
for(i=1;i<=mul;i++){
    for(j=1;j<=10;j++){
        console.log(i+" * "+ j + " = " + i*j)
    }
    console.log(".....................................................")
}