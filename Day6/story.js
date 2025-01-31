function collectNumbers() {
    var user = document.getElementById('num');
    var userInput = user.value;
    let exam = document.getElementById('result');
    // let nextResult = document.getElementById('Nextresult');
          // Get the input value
   if(userInput===""){
    console.log("dsf")
      exam.textContent = 'Enter String :';
      exam.classList.add("red-color");
   }
   else{

    // Split the input string into an array of substrings
    var stringArray = userInput.split('');

    // Convert the substrings to numbers
    var numberArray = stringArray.map(function(str) {
      var trimmedStr = str.trim();
      return trimmedStr ? String(trimmedStr) : NaN;
    });

    // Filter out any NaN values resulting from invalid inputs
    var validNumbers = numberArray.filter(function(num) {
      return !isNaN(num);
    });
   
    if((String(validNumbers))){
      exam.textContent = 'Entered Numbers :' + stringArray.join(' ');
      exam.classList.add("red-color");
      console.log('Collected numbers:', validNumbers);
      let displayResult728596 = document.createElement('h5');
      displayResult728596.classList.add("head-00");
      displayResult728596.textContent="Enter Characters only Try Again !";
      // displayResult728596.classList.add("head-00");
      result.appendChild(displayResult728596)

    }
    else{
        exam.textContent = 'Entered String : ' + stringArray.join(' ');
        exam.classList.add("green-color");
        console.log('Collected numbers:', validNumbers);

        let oneMan = document.createElement('div');
        oneMan.classList.add("input-element-1");
        oneMan.id = "star";
        
        let breakE3 = document.createElement('br');
        result.appendChild(breakE3);
        
        let zMan = document.createElement('button');
        zMan.classList.add("button-1");
        zMan.textContent = "Reverse";
        zMan.id = "comparison";

        let displayResult728 = document.createElement('h5');
        displayResult728.classList.add("head-00");

        // let reset = document.createElement('button');
        // reset.classList.add("button-1");
        // reset.textContent = "Reset";
        // reset.id = "comparisono";

       
        oneMan.appendChild(zMan);
        oneMan.appendChild(displayResult728);
        // oneMan.appendChild(reset);
        // oneMan.appendChild(reset);
        result.appendChild(oneMan);

        comparison.onclick=function(){
            let a =  stringArray.join(' ');
            b="";
            for(i=a.length-1;i>=0;i--){
                b += a[i];
            }
            displayResult728.textContent=b;
            
        } 
        let reset = document.createElement('button');
            reset.classList.add("btn");
            reset.textContent = "Reset";
            reset.id = "comparisono";
            oneMan.appendChild(reset);
            
            comparisono.onclick=function(){
            collectNumbers();
            exam.textContent="Click the button for an action !";
            // exam.id="";
            }
            

}



   }
   user.value=""
   
}