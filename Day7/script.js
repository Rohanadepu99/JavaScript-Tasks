const number = document.getElementById("num");
const result = document.getElementById("result");
var disappear = document.getElementById('disappear');
function more(){
    
    
    let numless = number.value;

    if(numless==="")
        {
            // console.log("dfgg")
            // disappear.textContent="";
        result.textContent="Please enter a number !";
    }
    else if(numless<0){
        // disappear.textContent="";
        result.textContent="Please enter number in +(ve) to get tables";
        result.classList.add("result-class");
        result.style.color = "green";
        number.value="";
    }
    else if(numless==0){
        // disappear.textContent="";
        result.textContent="Anything multiplied with 0 is 0 !";
        result.classList.add("result-class");
        result.style.color = "red";
    }
    else if(numless>=11){
        result.textContent="Please enter numbers up to (1 - 10)";
        result.classList.add("result-class");
        result.style.color = "red";
        number.value="";
    }
    else if(numless==="1"){
        result.textContent="";
        let oneMan = document.createElement('div');
        oneMan.classList.add("input-element-1");
        oneMan.id = "star";

        disappear.textContent="";
        let displayText000 = document.createElement('h4');
        displayText000.id="displayResult";
        displayText000.textContent="Multiplication Table "+ numless +" up to";

        let spanE1 = document.createElement('span');
        spanE1.style.color="red";
        spanE1.textContent = "(1-10)";
        spanE1.classList.add("discount-less");
        oneMan.appendChild(displayText000);   
        oneMan.appendChild(spanE1);

        let displayText = document.createElement('h4');
        displayText.id="displayResult";

        let displayText7285 = document.createElement('h4');
        displayText7285.id="displayResult";

        let selectOperator = document.createElement('ol');
        selectOperator.classList.add("list-item");
       
        displayText.appendChild(selectOperator);
        // let breakEl = document.createElement('br');
        // oneMan.appendChild(breakEl);

       
        // result.appendChild(oneMan);
        
        var i = parseInt(numless);
        var n;
           
                for( n=1; n<=10;n++){
                    if(i%2===0) {
                const listItem = document.createElement("li");
                listItem.textContent = i+" * "+n+" = "+n*i;
                selectOperator.appendChild(listItem); 
                displayText.textContent="Even Number !"
            } 
            else{

                displayText.textContent="Odd Number !";
                const listItem = document.createElement("li");
                listItem.textContent = i+" * "+n+" = "+n*i;
                selectOperator.appendChild(listItem); 
            }
        }
       
         oneMan.appendChild(displayText);
         oneMan.appendChild(selectOperator);
         oneMan.appendChild(displayText7285);
         result.appendChild(oneMan);  
         number.value="";
    }
    else if(numless==="2"){
        result.textContent="";
        let oneMan = document.createElement('div');
        oneMan.classList.add("input-element-1");
        oneMan.id = "star";

        disappear.textContent="";
        let displayText000 = document.createElement('h4');
        displayText000.id="displayResult";
        displayText000.textContent="Multiplication Table "+ numless +" up to";

        let spanE1 = document.createElement('span');
        spanE1.style.color="red";
        spanE1.textContent = "(1-10)";
        spanE1.classList.add("discount-less");
        oneMan.appendChild(displayText000);   
        oneMan.appendChild(spanE1);

        let displayText = document.createElement('h4');
        displayText.id="displayResult";

        let displayText7285 = document.createElement('h4');
        displayText7285.id="displayResult";

        let selectOperator = document.createElement('ol');
        selectOperator.classList.add("list-item");
       
        displayText.appendChild(selectOperator);
        // let breakEl = document.createElement('br');
        // oneMan.appendChild(breakEl);

       
        // result.appendChild(oneMan);
        
        var i = parseInt(numless);
        var n;
           
                for( n=1; n<=10;n++){
                    if(i%2===0) {
                const listItem = document.createElement("li");
                listItem.textContent = i+" * "+n+" = "+n*i;
                selectOperator.appendChild(listItem); 
                displayText.textContent="Even Number !"
            } 
            else{

                displayText.textContent="Odd Number !";
                const listItem = document.createElement("li");
                listItem.textContent = i+" * "+n+" = "+n*i;
                selectOperator.appendChild(listItem); 
            }
        }
       
         oneMan.appendChild(displayText);
         oneMan.appendChild(selectOperator);
         oneMan.appendChild(displayText7285);
         result.appendChild(oneMan);  
         number.value="";
    }
    else if(numless==="3"){
        result.textContent="";
        let oneMan = document.createElement('div');
        oneMan.classList.add("input-element-1");
        oneMan.id = "star";

        disappear.textContent="";
        let displayText000 = document.createElement('h4');
        displayText000.id="displayResult";
        displayText000.textContent="Multiplication Table "+ numless +" up to";

        let spanE1 = document.createElement('span');
        spanE1.style.color="red";
        spanE1.textContent = "(1-10)";
        spanE1.classList.add("discount-less");
        oneMan.appendChild(displayText000);   
        oneMan.appendChild(spanE1);

        let displayText = document.createElement('h4');
        displayText.id="displayResult";

        let displayText7285 = document.createElement('h4');
        displayText7285.id="displayResult";

        let selectOperator = document.createElement('ol');
        selectOperator.classList.add("list-item");
       
        displayText.appendChild(selectOperator);
        // let breakEl = document.createElement('br');
        // oneMan.appendChild(breakEl);

       
        // result.appendChild(oneMan);
        
        var i = parseInt(numless);
        var n;
           
                for( n=1; n<=10;n++){
                    if(i%2===0) {
                const listItem = document.createElement("li");
                listItem.textContent = i+" * "+n+" = "+n*i;
                selectOperator.appendChild(listItem); 
                displayText.textContent="Even Number !"
            } 
            else{

                displayText.textContent="Odd Number !";
                const listItem = document.createElement("li");
                listItem.textContent = i+" * "+n+" = "+n*i;
                selectOperator.appendChild(listItem); 
            }
        }
       
         oneMan.appendChild(displayText);
         oneMan.appendChild(selectOperator);
         oneMan.appendChild(displayText7285);
         result.appendChild(oneMan);  
         number.value="";
    }
    else if(numless==="4"){
        result.textContent="";
        let oneMan = document.createElement('div');
        oneMan.classList.add("input-element-1");
        oneMan.id = "star";

        disappear.textContent="";
        let displayText000 = document.createElement('h4');
        displayText000.id="displayResult";
        displayText000.textContent="Multiplication Table "+ numless +" up to";

        let spanE1 = document.createElement('span');
        spanE1.style.color="red";
        spanE1.textContent = "(1-10)";
        spanE1.classList.add("discount-less");
        oneMan.appendChild(displayText000);   
        oneMan.appendChild(spanE1);

        let displayText = document.createElement('h4');
        displayText.id="displayResult";

        let displayText7285 = document.createElement('h4');
        displayText7285.id="displayResult";

        let selectOperator = document.createElement('ol');
        selectOperator.classList.add("list-item");
       
        displayText.appendChild(selectOperator);
        // let breakEl = document.createElement('br');
        // oneMan.appendChild(breakEl);

       
        // result.appendChild(oneMan);
        
        var i = parseInt(numless);
        var n;
           
                for( n=1; n<=10;n++){
                    if(i%2===0) {
                const listItem = document.createElement("li");
                listItem.textContent = i+" * "+n+" = "+n*i;
                selectOperator.appendChild(listItem); 
                displayText.textContent="Even Number !"
            } 
            else{

                displayText.textContent="Odd Number !";
                const listItem = document.createElement("li");
                listItem.textContent = i+" * "+n+" = "+n*i;
                selectOperator.appendChild(listItem); 
            }
        }
       
         oneMan.appendChild(displayText);
         oneMan.appendChild(selectOperator);
         oneMan.appendChild(displayText7285);
         result.appendChild(oneMan);  
         number.value="";
    }
    else if(numless==="5"){
        result.textContent="";
        let oneMan = document.createElement('div');
        oneMan.classList.add("input-element-1");
        oneMan.id = "star";

        disappear.textContent="";
        let displayText000 = document.createElement('h4');
        displayText000.id="displayResult";
        displayText000.textContent="Multiplication Table "+ numless +" up to";

        let spanE1 = document.createElement('span');
        spanE1.style.color="red";
        spanE1.textContent = "(1-10)";
        spanE1.classList.add("discount-less");
        oneMan.appendChild(displayText000);   
        oneMan.appendChild(spanE1);

        let displayText = document.createElement('h4');
        displayText.id="displayResult";

        let displayText7285 = document.createElement('h4');
        displayText7285.id="displayResult";

        let selectOperator = document.createElement('ol');
        selectOperator.classList.add("list-item");
       
        displayText.appendChild(selectOperator);
        // let breakEl = document.createElement('br');
        // oneMan.appendChild(breakEl);

       
        // result.appendChild(oneMan);
        
        var i = parseInt(numless);
        var n;
           
                for( n=1; n<=10;n++){
                    if(i%2===0) {
                const listItem = document.createElement("li");
                listItem.textContent = i+" * "+n+" = "+n*i;
                selectOperator.appendChild(listItem); 
                displayText.textContent="Even Number !"
            } 
            else{

                displayText.textContent="Odd Number !";
                const listItem = document.createElement("li");
                listItem.textContent = i+" * "+n+" = "+n*i;
                selectOperator.appendChild(listItem); 
            }
        }
       
         oneMan.appendChild(displayText);
         oneMan.appendChild(selectOperator);
         oneMan.appendChild(displayText7285);
         result.appendChild(oneMan);  
         number.value="";
    }
    else if(numless==="6"){
        result.textContent="";
        let oneMan = document.createElement('div');
        oneMan.classList.add("input-element-1");
        oneMan.id = "star";

        disappear.textContent="";
        let displayText000 = document.createElement('h4');
        displayText000.id="displayResult";
        displayText000.textContent="Multiplication Table "+ numless +" up to";

        let spanE1 = document.createElement('span');
        spanE1.style.color="red";
        spanE1.textContent = "(1-10)";
        spanE1.classList.add("discount-less");
        oneMan.appendChild(displayText000);   
        oneMan.appendChild(spanE1);

        let displayText = document.createElement('h4');
        displayText.id="displayResult";

        let displayText7285 = document.createElement('h4');
        displayText7285.id="displayResult";

        let selectOperator = document.createElement('ol');
        selectOperator.classList.add("list-item");
       
        displayText.appendChild(selectOperator);
        // let breakEl = document.createElement('br');
        // oneMan.appendChild(breakEl);

       
        // result.appendChild(oneMan);
        
        var i = parseInt(numless);
        var n;
           
                for( n=1; n<=10;n++){
                    if(i%2===0) {
                const listItem = document.createElement("li");
                listItem.textContent = i+" * "+n+" = "+n*i;
                selectOperator.appendChild(listItem); 
                displayText.textContent="Even Number !"
            } 
            else{

                displayText.textContent="Odd Number !";
                const listItem = document.createElement("li");
                listItem.textContent = i+" * "+n+" = "+n*i;
                selectOperator.appendChild(listItem); 
            }
        }
       
         oneMan.appendChild(displayText);
         oneMan.appendChild(selectOperator);
         oneMan.appendChild(displayText7285);
         result.appendChild(oneMan);  
         number.value="";
    }
    else if(numless==="7"){
        result.textContent="";
        let oneMan = document.createElement('div');
        oneMan.classList.add("input-element-1");
        oneMan.id = "star";

        disappear.textContent="";
        let displayText000 = document.createElement('h4');
        displayText000.id="displayResult";
        displayText000.textContent="Multiplication Table "+ numless +" up to";

        let spanE1 = document.createElement('span');
        spanE1.style.color="red";
        spanE1.textContent = "(1-10)";
        spanE1.classList.add("discount-less");
        oneMan.appendChild(displayText000);   
        oneMan.appendChild(spanE1);

        let displayText = document.createElement('h4');
        displayText.id="displayResult";

        let displayText7285 = document.createElement('h4');
        displayText7285.id="displayResult";

        let selectOperator = document.createElement('ol');
        selectOperator.classList.add("list-item");
       
        displayText.appendChild(selectOperator);
        // let breakEl = document.createElement('br');
        // oneMan.appendChild(breakEl);

       
        // result.appendChild(oneMan);
        
        var i = parseInt(numless);
        var n;
           
                for( n=1; n<=10;n++){
                    if(i%2===0) {
                const listItem = document.createElement("li");
                listItem.textContent = i+" * "+n+" = "+n*i;
                selectOperator.appendChild(listItem); 
                displayText.textContent="Even Number !"
            } 
            else{

                displayText.textContent="Odd Number !";
                const listItem = document.createElement("li");
                listItem.textContent = i+" * "+n+" = "+n*i;
                selectOperator.appendChild(listItem); 
            }
        }
       
         oneMan.appendChild(displayText);
         oneMan.appendChild(selectOperator);
         oneMan.appendChild(displayText7285);
         result.appendChild(oneMan);  
         number.value="";
    }
    else if(numless==="8"){
        result.textContent="";
        let oneMan = document.createElement('div');
        oneMan.classList.add("input-element-1");
        oneMan.id = "star";

        disappear.textContent="";
        let displayText000 = document.createElement('h4');
        displayText000.id="displayResult";
        displayText000.textContent="Multiplication Table "+ numless +" up to";

        let spanE1 = document.createElement('span');
        spanE1.style.color="red";
        spanE1.textContent = "(1-10)";
        spanE1.classList.add("discount-less");
        oneMan.appendChild(displayText000);   
        oneMan.appendChild(spanE1);

        let displayText = document.createElement('h4');
        displayText.id="displayResult";

        let displayText7285 = document.createElement('h4');
        displayText7285.id="displayResult";

        let selectOperator = document.createElement('ol');
        selectOperator.classList.add("list-item");
       
        displayText.appendChild(selectOperator);
        // let breakEl = document.createElement('br');
        // oneMan.appendChild(breakEl);

       
        // result.appendChild(oneMan);
        
        var i = parseInt(numless);
        var n;
           
                for( n=1; n<=10;n++){
                    if(i%2===0) {
                const listItem = document.createElement("li");
                listItem.textContent = i+" * "+n+" = "+n*i;
                selectOperator.appendChild(listItem); 
                displayText.textContent="Even Number !"
            } 
            else{

                displayText.textContent="Odd Number !";
                const listItem = document.createElement("li");
                listItem.textContent = i+" * "+n+" = "+n*i;
                selectOperator.appendChild(listItem); 
            }
        }
       
         oneMan.appendChild(displayText);
         oneMan.appendChild(selectOperator);
         oneMan.appendChild(displayText7285);
         result.appendChild(oneMan);  
         number.value="";
    }
    else if(numless==="9"){
        result.textContent="";
        let oneMan = document.createElement('div');
        oneMan.classList.add("input-element-1");
        oneMan.id = "star";

        disappear.textContent="";
        let displayText000 = document.createElement('h4');
        displayText000.id="displayResult";
        displayText000.textContent="Multiplication Table "+ numless +" up to";

        let spanE1 = document.createElement('span');
        spanE1.style.color="red";
        spanE1.textContent = "(1-10)";
        spanE1.classList.add("discount-less");
        oneMan.appendChild(displayText000);   
        oneMan.appendChild(spanE1);

        let displayText = document.createElement('h4');
        displayText.id="displayResult";

        let displayText7285 = document.createElement('h4');
        displayText7285.id="displayResult";

        let selectOperator = document.createElement('ol');
        selectOperator.classList.add("list-item");
       
        displayText.appendChild(selectOperator);
        // let breakEl = document.createElement('br');
        // oneMan.appendChild(breakEl);

       
        // result.appendChild(oneMan);
        
        var i = parseInt(numless);
        var n;
           
                for( n=1; n<=10;n++){
                    if(i%2===0) {
                const listItem = document.createElement("li");
                listItem.textContent = i+" * "+n+" = "+n*i;
                selectOperator.appendChild(listItem); 
                displayText.textContent="Even Number !"
            } 
            else{

                displayText.textContent="Odd Number !";
                const listItem = document.createElement("li");
                listItem.textContent = i+" * "+n+" = "+n*i;
                selectOperator.appendChild(listItem); 
            }
        }
       
         oneMan.appendChild(displayText);
         oneMan.appendChild(selectOperator);
         oneMan.appendChild(displayText7285);
         result.appendChild(oneMan);  
         number.value="";
    }
    else if(numless==="10"){
        result.textContent="";
        let oneMan = document.createElement('div');
        oneMan.classList.add("input-element-1");
        oneMan.id = "star";

        disappear.textContent="";
        let displayText000 = document.createElement('h4');
        displayText000.id="displayResult";
        displayText000.textContent="Multiplication Table "+ numless +" up to";

        let spanE1 = document.createElement('span');
        spanE1.style.color="red";
        spanE1.textContent = "(1-10)";
        spanE1.classList.add("discount-less");
        oneMan.appendChild(displayText000);   
        oneMan.appendChild(spanE1);

        let displayText = document.createElement('h4');
        displayText.id="displayResult";

        let displayText7285 = document.createElement('h4');
        displayText7285.id="displayResult";

        let selectOperator = document.createElement('ol');
        selectOperator.classList.add("list-item");
       
        displayText.appendChild(selectOperator);
        // let breakEl = document.createElement('br');
        // oneMan.appendChild(breakEl);

       
        // result.appendChild(oneMan);
        
        var i = parseInt(numless);
        var n;
           
                for( n=1; n<=10;n++){
                    if(i%2===0) {
                const listItem = document.createElement("li");
                listItem.textContent = i+" * "+n+" = "+n*i;
                selectOperator.appendChild(listItem); 
                displayText.textContent="Even Number !"
            } 
            else{

                displayText.textContent="Odd Number !";
                const listItem = document.createElement("li");
                listItem.textContent = i+" * "+n+" = "+n*i;
                selectOperator.appendChild(listItem); 
            }
        }
       
         oneMan.appendChild(displayText);
         oneMan.appendChild(selectOperator);
         oneMan.appendChild(displayText7285);
         result.appendChild(oneMan);  
         number.value="";
    }

}