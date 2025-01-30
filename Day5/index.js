// reverse a string input: hello output : hello
var Name=prompt("Enter a String:")
var new_name=""
for(i=Name.length-1;i>=0;i--){
    new_name+=Name[i]
}
console.log(new_name)

// find a even numbers and odd numbers in an array - [23,54,67,64,46,95,98] and also 
// find evensum greater or odd sum greater even: 54,64,46,98   odd: 23,67,95
var mynumber=prompt("Enter array Size:")
var arr = [];
let arr1=[]
let arr2=[]
for(let i=0; i<mynumber; i++) {
//    arr.push(i.toString());
    arr[i]=+prompt("Enter your "+ i + " Number:")
}
console.log(arr)
for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        arr1.push(arr[i])
    }
    else{
        arr2.push(arr[i])
    }
}
console.log(arr1)
console.log(arr2)
let sum1=0;
let sum2=0;
for(let i=0;i<arr1.length;i++){
    sum1+=arr1[i]
}
for(let i=0;i<arr2.length;i++){
    sum2+=arr2[i]
}
console.log(sum1)
console.log(sum2)
if (sum1>sum2){
    console.log("Even Sum is greater than Odd Sum")
}
else{
    console.log("Odd Sum is greater than Even Sum")
}