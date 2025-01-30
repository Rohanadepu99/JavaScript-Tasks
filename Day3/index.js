// Task 1: Day of the Week Message
// Scenario: Develop a webpage that displays a special message based on the current day of the week.

// “Start your week strong!” for Monday.
// “Keep going!” for Tuesday.
// “Halfway there!” for Wednesday.
// “Almost the weekend!” for Thursday.
// “Happy Friday!” for Friday.
// “Enjoy your weekend!” for Saturday and Sunday.
let day = prompt("Enter a Day:")

switch(day.toLowerCase()){
    case("monday"):console.log("Start your week strong!")
    break;
    case("tuesday"):console.log("Keep going!")
    break;
    case("wednesday"):console.log("Halfway there!")
    break;
    case("thursday"):console.log("Almost the weekend!")
    break;
    case("friday"):console.log("Happy Friday!")
    break;
    case("saturday"):console.log("Enjoy your weekend!")
    break;
    case("sunday"):console.log("Enjoy your weekend!")
    break;
    default:console.log("Enter valid Day")
    break;
}

// Task 2: Discount Calculator
// Scenario: Calculate the discount based on the total purchase amount.

// “No discount” if the amount is less than $50.
// “5% discount” if the amount is between $50 and $100.
// “10% discount” if the amount is between $101 and $200.
// “15% discount” if the amount is above $200.
// Task:

// Prompt the user to enter the total purchase amount.
// Display the discount percentage.

let cost=prompt("Enter Total Cost of items : ")
let discount=(cost<50)?"No discount":(cost>=50 && cost<=100)?"5% discount":(cost>=101 && cost<=200)?"10% discount":(cost>200)?"15% discount":"Enter valid value";
console.log(discount)