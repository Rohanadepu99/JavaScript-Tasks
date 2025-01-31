
      
      
//     function more(){  
//     result.textContent="Check greatest Even (or) odd number from user !";

//     let breakEl = document.createElement('br');
//     result.appendChild(breakEl);

//     // let breakE2 = document.createElement('br');
//     // result.appendChild(breakE2);
//    
//     let numberone = document.createElement('label');
//     numberone.textContent="Enter Number :";
//     numberone.classList.add('label');
//     let inputElement = document.createElement('input');
//     inputElement.type = "number";
//     inputElement.classList.add("compare-class");
//     inputElement.id = "age";

  //  

//     oneMan.appendChild(numberone);
//     oneMan.appendChild(inputElement);
//     result.appendChild(oneMan);

// let oneMan = document.createElement('div');
//     oneMan.classList.add("input-element-1");
//     oneMan.id = "star";


//     let breakE3 = document.createElement('br');
//     result.appendChild(breakE3);
//     let twoMan = document.createElement('button');
//     twoMan.classList.add("button-1");
//     twoMan.textContent = "Check";
//     twoMan.id = "comparisonResults";
//     result.appendChild(twoMan);


//     let displayText = document.createElement('h4');
//     displayText.id="displayResult";
//     result.appendChild(displayText);

//     comparisonResults.onclick = function()
//     {
//         let userSelection00 = document.getElementById('userSelection');
//         // let userSelection000 = userSelection00.value;
//         let ageless = document.getElementById('age');
//         let agee = ageless.value;

//         let displayResult0 = document.getElementById('displayResult');
//         if(agee === ""){
//             displayResult0.textContent = "Please enter a number "
//             displayResult0.classList.add("head-44");
//            }
//         else if(agee%2==0){
//             displayResult0.textContent = agee + " is a Even Number ";
//             displayResult0.style.color="red";
//             displayResult0.classList.add("result-one");
//         }
        
//         else{
//             displayResult0.textContent = agee + " is a odd Number ";
//             displayResult0.style.color="rgb(117, 117, 118)";
//             displayResult0.classList.add("result-normal");
//         }
//         ageless.value="";
// }
//     }

//     function submit(){
//         let inputUser = document.getElementById('inputUser');
//         let user = inputUser.value;
//         // let userR = parseInt(user);
//         let str = int.user;
//         let result = document.getElementById('result');

//         result.textContent=str;

//     }


function collectNumbers() {
    var user = document.getElementById('num');
    var userInput = user.value;
    let exam = document.getElementById('result');
    let nextResult = document.getElementById('Nextresult');
          // Get the input value
   if(userInput===""){
    console.log("dsf")
      exam.textContent = 'Enter Number :';
      exam.classList.add("red-color");
   }
   else{

    // Split the input string into an array of substrings
    var stringArray = userInput.split(',');

    // Convert the substrings to numbers
    var numberArray = stringArray.map(function(str) {
      var trimmedStr = str.trim();
      return trimmedStr ? Number(trimmedStr) : NaN;
    });

    // Filter out any NaN values resulting from invalid inputs
    var validNumbers = numberArray.filter(function(num) {
      return !isNaN(num);
    });
   
    if(!(String(validNumbers))){
      exam.textContent = 'Entered Characters :' + stringArray.join(', ');
      exam.classList.add("red-color");
      console.log('Collected numbers:', validNumbers);
      let displayResult728596 = document.createElement('h5');
      displayResult728596.classList.add("head-00");
      displayResult728596.textContent="Enter Numbers only Try Again !";
      // displayResult728596.classList.add("head-00");
      result.appendChild(displayResult728596)

    }
    else{
    // Display the resulting array
    exam.textContent = 'Collected numbers: ' + validNumbers.join(', ');
    exam.classList.add("green-color");
    console.log('Collected numbers:', validNumbers);

    let oneMan = document.createElement('div');
    oneMan.classList.add("input-element-1");
    oneMan.id = "star";
    
    let breakE3 = document.createElement('br');
    result.appendChild(breakE3);
    
    let accessValue = document.createElement('p');
    accessValue.id="Result";  
    // accessValue=validNumbers.value;
    // accessValue.textContent=validNumbers;
    console.log(accessValue);

    let twoMan = document.createElement('button');
    twoMan.classList.add("button-1");
    twoMan.textContent = "Check Even Sum";
    twoMan.id = "comparisonResults";
    
    let displayResult7285 = document.createElement('h5');
    displayResult7285.classList.add("head-00");

    let zMan = document.createElement('button');
    zMan.classList.add("button-1");
    zMan.textContent = "Check Odd Sum";
    zMan.id = "comparison";
    

    let displayResult728 = document.createElement('h5');
    displayResult728.classList.add("head-00");
    
    let displayResult6302 = document.createElement('h5');
    displayResult6302.classList.add("head-00");

    let zeroMan = document.createElement('button');
    zeroMan.classList.add("button-1");
    zeroMan.textContent = "Check Even/Odd (>/<)";
    zeroMan.id = "comparisonCheck";
    
    let reset = document.createElement('button');
    reset.classList.add("button-1");
    reset.textContent = "Reset";
    reset.id = "comparisonReset";
    oneMan.appendChild(reset);

    oneMan.appendChild(accessValue);
    oneMan.appendChild(twoMan);
    oneMan.appendChild(displayResult7285);
    oneMan.appendChild(zMan);
    oneMan.appendChild(displayResult728);
    oneMan.appendChild(zeroMan);
    oneMan.appendChild(displayResult6302);
    oneMan.appendChild(reset);
    result.appendChild(oneMan);
    nextResult.appendChild(result);

    
    const total = validNumbers.filter(validNumbers => validNumbers % 2 == 0).reduce((sum, validNumbers) => sum + validNumbers, 0);
    const total00 = validNumbers.filter(validNumbers => validNumbers % 2 !== 0).reduce((sum, validNumbers) => sum + validNumbers, 0);
     
     
      comparisonResults.onclick=function(){
       
      if(validNumbers.filter(validNumbers => validNumbers % 2 == 0)){

      // const total = validNumbers.filter(validNumbers => validNumbers % 2 == 0).reduce((sum, validNumbers) => sum + validNumbers, 0);
      
        // accessValue.textContent=total;
      
    displayResult7285.textContent="Total Even Sum :"+total;
      }
      // else{
      //   const total00 = validNumbers.filter(validNumbers => validNumbers % 2 == 0).reduce((sum, validNumbers) => sum + validNumbers, 0);
      //   displayResult7285.textContent="Total Sum odd "+total00;
      // }
    }

      comparison.onclick=function(){
       
       
      if(validNumbers.filter(validNumbers => validNumbers % 2 !== 0)){

      // const total00 = validNumbers.filter(validNumbers => validNumbers % 2 !== 0).reduce((sum, validNumbers) => sum + validNumbers, 0);
      
        // accessValue.textContent=total;
      
      displayResult728.textContent="Total Odd Sum : "+total00;
      }
      // else{
      //   const total00 = validNumbers.filter(validNumbers => validNumbers % 2 == 0).reduce((sum, validNumbers) => sum + validNumbers, 0);
      //   displayResult7285.textContent="Total Sum odd "+total00;
      // // }
      // let zeroMan = document.createElement('button');
      // zeroMan.classList.add("button-1");
      // zeroMan.textContent = "Check Even Sum";
      // zeroMan.id = "comparisonCheck";
      // oneMan.appendChild(zeroMan);

     
      
    }

    comparisonCheck.onclick=function(){
      // let a = displayResult7285.value;
      // let b = displayResult728.value;

      if(total>total00){
        // console.log(a);
        // let displayResult72 = document.createElement('h5');
        // displayResult72.classList.add("head-00");
        displayResult6302.textContent="Even Number is Great :"+total;
        // oneMan.appendChild(displayResult72);
      }
      else{
        // let displayResult7200 = document.createElement('h5');
        // displayResult7200.classList.add("head-00");
        displayResult6302.textContent="Odd Number is Great :"+total00;
        // oneMan.appendChild(displayResult7200);
      }
      
     
      
    }

    comparisonReset.onclick=function() {
      collectNumbers();
      exam.textContent="Click the button for an action !";
      exam.classList.add("greenColor");
    }
   
    user.value="";

  }
 

}

}