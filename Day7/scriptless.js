const number = document.getElementById("num");
const result = document.getElementById("result");
var disappear = document.getElementById('disappear');

function more() {
    let numless = parseInt(number.value);

    // Clear previous result
    result.textContent = "";
    disappear.textContent = "";

    // Input validation
    if (isNaN(numless)) {
        result.textContent = "Please enter a number!";
        result.style.color = "red";
        return;
    }
    
    if (numless <= 0) {
        result.textContent = "Please enter a positive number!";
        result.style.color = "red";
        number.value="";
        // return;
    }
    if (numless == 0) {
        result.textContent = "Anything multiplied with 0 is 0";
        result.style.color = "red";
        number.value="";
        stop.more();
        // return;
    }

    // if (numless > 100000000000000) {
    //     result.textContent = "Please enter numbers up to (1 - 9999999999999999)";
    //     result.style.color = "red";
    //     number.value = "";
    //     return;
    // }

    // Create container for the multiplication table
    const oneMan = document.createElement('div');
    oneMan.classList.add("input-element-1");
    oneMan.id = "star";

    const displayText000 = document.createElement('h4');
    displayText000.textContent = `Multiplication Table for ${numless}`;
    
    const spanE1 = document.createElement('span');
    spanE1.style.color = "red";
    spanE1.textContent = " (1-10)";

   
    const selectOperator = document.createElement('ol');
    selectOperator.classList.add("list-item");

    

    for (let n = 1; n <= 10; n++) {

        
        
        const listItem = document.createElement("li");
        listItem.textContent = `${numless} * ${n} = ${numless * n}`;
        
        selectOperator.appendChild(listItem);

       
    }
    const numberTypeText = document.createElement('h4');
    numberTypeText.textContent = numless % 2 === 0 ? "Even Number!" : "Odd Number!";
    numberTypeText.style.color = numless % 2 === 0 ? "blue" : "green";

   
    oneMan.appendChild(displayText000);
    oneMan.appendChild(spanE1);
    oneMan.appendChild(numberTypeText);
    oneMan.appendChild(selectOperator);
   

    result.appendChild(oneMan);
    number.value = "";
}