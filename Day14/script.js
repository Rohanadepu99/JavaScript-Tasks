let sub = document.getElementById('subject');
// sub.innerHTML=""
let mainElement = document.createElement('div');
mainElement.classList.add("program");

let main = document.createElement('div');
main.classList.add("program");

let inputE1 = document.createElement('input');
inputE1.type = "text";
inputE1.classList.add("input-element");
inputE1.id = "userValue";
inputE1.placeholder = "Enter your favorite sports ?";

let para = document.createElement('p')
para.classList.add("message")
// para.textContent=""
para.id="messageError"

let inputE2 = document.createElement('input');
inputE2.type = "text";
inputE2.classList.add("input-element");
inputE2.id = "userPassword";
inputE2.placeholder = "Enter your hobbies !";

let paraMan = document.createElement('p')
paraMan.classList.add("message")
// para.textContent=""
paraMan.id="messageErrorOne"

main.append(inputE1,para,inputE2,paraMan)

let other = document.createElement('div')
other.classList.add("other")

let submitBtn = document.createElement('button');
submitBtn.type = "submit";
submitBtn.classList.add("submit-btn");
submitBtn.textContent = "Submit";

let userBoxes = document.createElement('div');
userBoxes.classList.add("user-box");

let paraFor = document.createElement('p')
paraFor.classList.add("message")
// para.textContent=""
paraFor.id="favorite"

let paraE1Hobby = document.createElement('p')
paraE1Hobby.classList.add("message")
// para.textContent=""
paraE1Hobby.id="hobby"

let maintain = document.createElement('div');
maintain.classList.add("programless")

let operations2 = document.createElement('button');
operations2.classList.add("Addless")
operations2.id="perform"
operations2.textContent="Concat"

let resultant = document.createElement('div');
resultant.classList.add("resultant");
resultant.id="reels"

let maintainE1 = document.createElement('div');
maintainE1.classList.add("program555")

let submitBtn1 = document.createElement('button');
submitBtn1.classList.add("submit-btn");
submitBtn1.id="hey"
submitBtn1.textContent = "Reset";
maintain.style="display:none";
submitBtn1.style="display:none";
submitBtn.onclick=function(){
  let pass = document.getElementById('userValue')
  let passValue = pass.value;
  let passTwo = document.getElementById('userPassword')
  let passTwoTime = passTwo.value;
  let messageError = document.getElementById('messageError')
  let messageDisplay = document.getElementById('messageErrorOne')
  let reel = document.getElementById('reels');
  if(passValue =="" && passTwoTime == ""){
      messageError.textContent="Required*";
      messageDisplay.textContent="Required*"
      messageDisplay.style.fontWeight="725";
      messageDisplay.style.marginTop="10px";
      messageError.style.fontWeight="725";
      messageError.style.marginBottom="10px"
  }
  else if(passTwoTime==""){
      messageError.textContent="";
      messageDisplay.textContent="Required*"
      messageDisplay.style.fontWeight="725";
      messageDisplay.style.marginTop="10px"
  }
   
 else if(passValue==""){
  messageDisplay.textContent=""
      messageError.textContent="Required*"
      messageError.style.fontWeight="725";
      messageError.style.marginBottom="10px";
  }
  
  else if(Number(passValue)&&Number(passTwoTime)){
      messageError.textContent=`Entered number ${passValue} ! enter string`
      messageError.style.fontWeight="725";
      messageError.style.marginBottom="10px"
      messageDisplay.textContent=`Entered number ${passTwoTime} ! enter string`
      messageDisplay.style.fontWeight="725";
      messageDisplay.style.marginBottom="10px"
  }
else{
      messageError.textContent="";
      var stringArray = passValue.split(',');

      let innerMessage = document.getElementById('favorite');
      let outerMessage = document.getElementById('hobby');

      var numberArray = stringArray.map(function(str) {
        var trimmedStr = str.trim();
        return trimmedStr ? String(trimmedStr) : true // here remove NaN for including space as Nan !
      });

      var validNumbers = numberArray.filter(function(num) {
        return isNaN(num);// we haveto remove ! in this position to get strings
      });
     
      if((String(validNumbers))){
        innerMessage.textContent="Favorite sports : "+ validNumbers.join(",");
        innerMessage.classList.add("green")
      }
      messageDisplay.textContent="";
      var stringArrayOne = passTwoTime.split(',');

      var numberArrayOne = stringArrayOne.map(function(str) {
        var trimmedStrOne = str.trim();
        return trimmedStrOne ? String(trimmedStrOne) : true // here remove NaN for including space as Nan !
      });

      var validNumbersOne   = numberArrayOne.filter(function(num1) {
        return isNaN(num1);// we haveto remove ! in this position to get strings
      });
     
      if((String(validNumbersOne))){
        outerMessage.textContent="Favorite Hobbies : "+ validNumbersOne.join(",");
        outerMessage.classList.add("green")
        outerMessage.style.color="green";
      }


      console.log(validNumbers)
      maintain.style="display:block"
      reel.style="display:none"
      userBoxes.style="display:block";
      maintain.style="display:flex";
      maintain.style="gap:15px";

      let per = document.getElementById('perform')
      per.addEventListener("click" ,function()
      {
          reel.style="display:block"
          submitBtn1.style="display:block"
          console.log("dfb")
        let sum = validNumbers.join(" ");
        let sumone = validNumbersOne.join(" ");
        let arr1 =[];
        let arr2 =[];
        let boon = sum.split(',')
        let boono = sumone.split(',')
        console.log(boon,boono)
        arr1 = boon;
        arr2 = boono;
        for(i in arr1){
          for(j in arr2){
             let tot = [];
            tot = tot.concat(arr1[i],arr2[j])
             console.log(tot)
             reel.textContent=`Favorite Movies & Hobbies Array : ${tot.join(" ")}`
          }
        }
      });

      let Result = document.getElementById('hey');
      Result.onclick=function(){
        maintain.style="display:none";
        submitBtn1.style="display:none";
        userBoxes.style="display:none";
        pass.value="";
        messageError.textContent=""
        messageDisplay.textContent=""
      }
        
       pass.value=""
       passTwo.value=""
}        

}
maintain.append(operations2,resultant)
userBoxes.append(paraFor,paraE1Hobby)
other.append(submitBtn,userBoxes,maintain,maintainE1,submitBtn1)
mainElement.append(main,other)
sub.append(mainElement)
// task.append(sub)

// Task 2: Using splice
// Objective: Modify an array by adding, removing, or replacing elements.
// Task: Create an array of numbers from 1 to 10. Use the splice method to remove the numbers 4, 5, and 6, and replace them with the numbers 40, 50, and 60.
// Expected Output: Display the array before and after the splice operation.

let subjectone = document.getElementById('subjectOne');

// let process = document.createElement('div');
// process.classList.add("process");

let mains = document.createElement('div');
mains.classList.add("programOne");


let inputE1One = document.createElement('input');
inputE1One.type = "text";
inputE1One.classList.add("input-element");
inputE1One.id = "userConcept";
inputE1One.placeholder = "Enter numbers !";

let paraThree = document.createElement('p')
paraThree.classList.add("message")
paraThree.id="messageConcept"

let displayInput = document.createElement('div')
displayInput.classList.add("much")

let system = document.createElement('system');
system.classList.add('system');

let original = document.createElement('div');
original.classList.add("resultant");
original.id="originalEvent"

let others = document.createElement('div')
others.classList.add("otherMan")

let submitBtnOk = document.createElement('button');
submitBtnOk.type = "submit";
submitBtnOk.classList.add("submit-btn");
submitBtnOk.style.marginBottom="10px"
submitBtnOk.textContent = "Submit";


let maintain5 = document.createElement('div');
maintain5.classList.add("programmanager");
maintain5.id="observe"

let classOne = document.createElement('div')
classOne.classList.add("anoop")

let inputE1Six = document.createElement('input');
inputE1Six.type = "text";
inputE1Six.classList.add("input-element");
inputE1Six.id = "userInvalid";
inputE1Six.placeholder = "Enter add numbers !";

let handsome = document.createElement('p')
handsome.id="hand";

let operations25 = document.createElement('button');
operations25.classList.add("Addless")
operations25.id="perform5"
operations25.textContent="Add"

let paraThree105 = document.createElement('p')
paraThree105.classList.add("message")
paraThree105.id="me"

let resultantE1 = document.createElement('div');
resultantE1.classList.add("resultant");
resultantE1.id="release"

let classTwo = document.createElement('div')
classTwo.classList.add("anoop")

let inputE1Seven = document.createElement('input');
inputE1Seven.type = "text";
inputE1Seven.classList.add("input-element");
inputE1Seven.id = "removeSeven";
inputE1Seven.placeholder = "Enter numbers to remove from array !";

let removeOption = document.createElement('p')
removeOption.id="removeHand";

let operations25Remove = document.createElement('button');
operations25Remove.classList.add("Addless")
operations25Remove.id="removeButton"
operations25Remove.textContent="Remove"

let paraThree105Remove = document.createElement('p')
paraThree105Remove.classList.add("message")
paraThree105Remove.id="removeMsg"

let resultantE1Remove = document.createElement('div');
resultantE1Remove.classList.add("resultant");
resultantE1Remove.id="removeText"

let subsisdy = document.createElement('div');
subsisdy.classList.add("money")

let submitBtnLast = document.createElement('button');
submitBtnLast.classList.add("submit-btn");
submitBtnLast.id="shyam"
submitBtnLast.textContent = "Reset";

displayInput.style="display:none";
maintain5.style="display:none";
subsisdy.style="display:none";
// submitBtn1.style="display:none";
submitBtnOk.onclick=function(){
  
  let accessKey = document.getElementById('userConcept')
  let paraKey = document.getElementById('messageConcept')
  let originalEvent = document.getElementById('originalEvent');
  let access = accessKey.value;
  if(access =="")
    {
      
      paraKey.textContent = "Please enter a number !"
      paraKey.style.marginBottom="10px"
  }


else{
  displayInput.style="display:none";
  maintain5.style="display:none";
  classTwo.style="display:none";
  subsisdy.style="display:none";

  resultantE1.style="display:none";
 var stringArrays = access.split(',');

 // Convert the substrings to numbers
 var numberArrays = stringArrays.map(function(strl) {
   var trimmedStrset = strl.trim();
   return trimmedStrset ? Number(trimmedStrset) : NaN;
 });

 // Filter out any NaN values resulting from invalid inputs
 var validNumbersMove = numberArrays.filter(function(nums) {
   return !isNaN(nums);
 });
}
accessKey.value=""
 if(!(String(validNumbersMove))){
  paraKey.textContent = 'Entered Characters :' + stringArrays.join(', ');
  paraKey.style.marginBottom="10px"
 }
 else{
  

  paraKey.textContent = 'Numbers Array : ' + validNumbersMove.join(', ');
  paraKey.classList.add("green-color");
  originalEvent.textContent=`Original Array : ${validNumbersMove.join(',')}`;
  displayInput.style="display:block";
  maintain5.style="display:block";
  classTwo.style="display:none";
  subsisdy.style="display:none";
  //  validNumbersMove
  // console.log(m)
  let btn5 = document.getElementById("perform5");
  btn5.onclick=function(){
  resultantE1Remove.style="display:none";
   
    let userValid = document.getElementById('userInvalid');
    let userValidData = userValid.value;
    let hand = document.getElementById('hand');
    let meyou = document.getElementById('me');
    let preRelease = document.getElementById('release');
  //  console.log(userValidData)
  //  console.log(userValid)
   if(userValidData =="")
    {
      hand.textContent = "Please enter numbers to add in array !"
      hand.classList.add("model")
  }


else{
  hand.textContent="";
  maintain5.style="display:block";
  subsisdy.style="display:none";
  classTwo.style="display:block";
  classTwo.style="display:flex";
  resultantE1.style="display:block";

 var stringArraysms = userValidData.split(',');

 // Convert the substrings to numbers
 var numberArraysms = stringArraysms.map(function(strl) {
   var trimmedStrsetsms = strl.trim();
   return trimmedStrsetsms ? Number(trimmedStrsetsms) : NaN;
 });

 // Filter out any NaN values resulting from invalid inputs
 var validNumbersMovesms = numberArraysms.filter(function(nums) {
   return !isNaN(nums);
 });
}
 userValid.value=""
 if(!(String(validNumbersMovesms))){
  meyou.textContent = 'Entered Characters :' + stringArraysms.join(', ');
 }
 else{
  
  meyou.textContent = 'Numbers to add : ' + validNumbersMovesms.join(', ');
  meyou.classList.add("green-color");
  meyou.style.marginTop="25px"
  let ms =[];
  ms = validNumbersMove;
  let secondPosition = [];
  secondPosition = validNumbersMovesms;
  let sumArray = [ms,secondPosition].flat();
  // let sumArray = ms.concat(secondPosition); // concat working
  // let sumArray = ms.push.apply(secondPosition);// not working Push () method !
  console.log(sumArray)
  preRelease.textContent=`Added Numbers : ${sumArray}`
  let RemoveData = document.getElementById('removeButton');
  resultantE1Remove.style="display:none";
  subsisdy.style="display:none";

  RemoveData.onclick=function(){

  let userRemove = document.getElementById('removeSeven');
  let userValidDataRemove = userRemove.value;
  let RemoveMessage = document.getElementById('removeMsg');
  let RemoveContainer = document.getElementById('removeText');
  let removeHand = document.getElementById('removeHand');
  if(userValidDataRemove =="")
    {
      removeHand.textContent = "Please enter numbers to remove in array !"
      removeHand.classList.add("model")
  }


else{
  removeHand.textContent=""
  resultantE1Remove.style="display:block";
  subsisdy.style="display:block";

 var stringArrayremove = userValidDataRemove.split(',');

 // Convert the substrings to numbers
 var numberArrayremove  = stringArrayremove.map(function(strl) {
   var trimmedRemove = strl.trim();
   return trimmedRemove ? Number(trimmedRemove) : NaN;
 });

 // Filter out any NaN values resulting from invalid inputs
 var validNumbersRemove = numberArrayremove.filter(function(nums) {
   return !isNaN(nums);
 });
}
 if(!(String(validNumbersRemove))){
  RemoveMessage.textContent = 'Entered Characters :' + stringArrayremove.join(', ');
 }
 else{
  RemoveMessage.textContent = 'Numbers to remove : ' + validNumbersRemove.join(', ');
  RemoveMessage.classList.add("green-color");
  RemoveMessage.style.marginTop="21px"
  let removeList =[];
  removeList = validNumbersMove;
  let secondPositionRemove = [];
  secondPositionRemove = validNumbersRemove;
  console.log(removeList)
  console.log(secondPositionRemove);
  let filterArr = removeList.filter(numo => !(secondPositionRemove).includes(numo));
  console.log(filterArr)
  RemoveContainer.textContent=`Removed From Array ${filterArr}`;

  let shyam = document.getElementById('shyam');
  shyam.onclick=function(){
  maintain5.style="display:none";
  resultantE1.style="display:none";
  displayInput.style="display:none"
 //  paraThree.style="display:none"
  paraThree.textContent="";
  paraThree105.textContent="";
  paraThree105Remove.textContent="";
  }

 }
userRemove.value=""
  }
}
  }
 }

}
  system.append(original)
  displayInput.append(system)
 others.append(submitBtnOk);
 classOne.append(inputE1Six,handsome,operations25,paraThree105,resultantE1)
 classTwo.append(inputE1Seven,removeOption,operations25Remove,paraThree105Remove,resultantE1Remove,)
 subsisdy.append(submitBtnLast)
 maintain5.append(classOne,classTwo,subsisdy)
 console.log(maintain5)
 mains.append(inputE1One,paraThree,displayInput,others,maintain5)
 subjectone.append(mains)