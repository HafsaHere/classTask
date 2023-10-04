// FUNCTION

// QUES NO:1

var Date = new Date();
console.log(Date);

// QUES NO:2

function popUp(){
       console.log(firstName+ " " +lastName);
}

var firstName= prompt("enter your first name");
var lastName= prompt("enter your last name");
popUp();
    
// QUES NO:3

function sum (){
  return (num1+num2)
 }
var num1= prompt("enter first number");
var num2= prompt("enter first number");
var result =sum();
console.log (result);

// QUES NO:4

function calc (num1,opr,num2){
    if (opr==="+"){
        return num1+num2;
    }
    else if(opr==="-"){
        return num1-num2;
    }
    else if(opr==="*"){
        return num1*num2;
    }
    else if(opr==="/"){
        return num1/num2;
    }
}
 
var num1= +prompt("enter first number");
var operator= prompt("enter operator");
var num2= +prompt("enter second number");

var result =calc(num1,operator,num2);
console.log(result);

// QUES NO:5

function counting(startNum,endNum){
 for(var i=1; i<=endNum; i++){
    console.log(i + "<br>");
 }
}
var a= +prompt("enter starting number");
var b=+prompt("enter a end number");
 counting(a,b);

// QUES NO:11

function str(){
    console.log("'the quick brown fox'".toUpperCase);
}















































