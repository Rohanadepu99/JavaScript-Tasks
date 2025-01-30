// Write a JavaScript script that compares two variables using different comparison operators (==, ===, !=, !==, >, <, >=, <=) and prints the results.
var num1=+prompt("Enter First Number : ")
var num2=+prompt("Enter Second Number : ")
console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);
console.log(num1%num2);
console.log(num1**num2);
console.log(num1==num2);
console.log(num1===num2);
console.log(num1!=num2);
console.log(num1!==num2);
console.log(num1>num2);
console.log(num1<num2);
console.log(num1>=num2);
console.log(num1<=num2);

// Write a JavaScript script that uses the ternary operator to determine if a number is even or odd.
var num=+prompt("Enter a Number to check even or odd :")
var s=(num%2==0)? "Even": "Odd"
console.log(s)
// (num%2==0)? console.log("Even"): console.log("Odd")

// Expand the script to include a ternary operation that checks if a user is an adult (18+) or a minor.

var age=+prompt("Enter Your Age :")
var s1=(age>18)? "Adult" : "Minor"
console.log(s1)

// Grade Classification: Declare a variable score and set it to a value between 0 and 100.
//  Use nested ternary operators to classify the score into grades: A (>= 90), B (>= 75), C (>= 60), D (>= 45), and F (below 45). Log the grade.

var marks=+prompt("Enter Your Marks")
var grade=(marks>=90)? "A" : (marks>=75)? "B" :(marks>=60)? "C" :(marks>=45)? "D" : "F"
console.log(grade)

// Temperature Check: Declare a variable temperature and 
//  use nested ternary operators to categorize it as "Hot" (above 30), "Warm" (20-30), "Cool" (10-19), and "Cold" (below 10). Log the result.

var temperature=+prompt("Enter room Temperature:")
var temp=(temperature>30)? "Hot" : (temperature>=20 && temperature<=30)? "Warm" : (temperature>=10 && temperature<=19)? "Cool": "Cold"
console.log(temp)

// Age Group: Declare a variable age and 
// use the ternary operator to classify the age into "Child" (0-12), "Teen" (13-19), "Adult" (20-64), and "Senior" (65 and above). Log the result.
var age_group=+prompt("Enter your age")
var s2 = (age_group>=0 && age_group<=12)?"Child" :(age_group>=13 && age_group<=19)?"Teen" :(age_group>=20 && age_group<=64)?"Adult" :(age_group>=65)?"Senior" : "Enter valid data";
console.log(s2)