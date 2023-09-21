// ARRAYS AND LOOP

// QUES No:3

for (var i=1; i <= 10; i++){
 console.log(i)
}

// QUES No:4

var userInput = prompt("enter your number to generate a multiplication table") 
var userInputLength = prompt( "enter your length")

for (var i = 1; i <= userInputLength; i++){
   document.write(userInput + "x" + i + "=" + userInput*i + "<br>");
}

// QUES No:5

var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
 for (var i =0; i <= 4; i++){
  
    console.log("Eliminate at index " + i + " is " + fruits)
 }

// QUES No:6

document.write(" <br> <b> Counting:</b> <br>")
 for ( var i =1; i<=15; i++){
   document.write(i + "," )
 }   

 document.write(" <br> <b> Reverse  Counting:</b> <br>")
 for ( var i =10; i>=1; i--){
   document.write(i + "," )
 }   

 document.write(" <br> <b> Even:</b> <br>")
 for ( var i =-1; i<=9; i++){
   document.write( i + i+2 + "," )
 }   

 document.write(" <br> <b> Odd:</b> <br>")
 for ( var i =2; i<=10; i++){
   document.write(i + i+2 + ",")
 }   

 document.write(" <br> <b> Series:</b> <br>")
 for ( var i =0; i<=9; i++){
   document.write(i + i+2 + "k" + "," )
 }   

// QUES No:7

var userInput= prompt("Welcome to ABC bakery. What do you want to order sir/mam?");
var bakery = ["cake", "apple" , "pie", "cookie", "chips", "patties"];
for(var i =0; i<bakery.length; i++){

  if(userInput=== "cake") {
  console.log(userInput,"is available in our bakery")
}
else if(userInput=== "apple") {
  console.log(userInput,"is available in our bakery")
}
 else if(userInput=== "pie") {
  console.log(userInput,"is available in our bakery")
}
else if(userInput=== "cookie") {
  console.log(userInput,"is available in our bakery")
}
 else if(userInput=== "chips") {
  console.log(userInput,"is available in our bakery")
}
else if(userInput=== "patties") {
  console.log(userInput,"is available in our bakery")
}
else {
  console.log(userInput,"is not available in our bakery..")
}
}

// QUES No:8

var A =["Array Items",24, 53, 78, 91, 12 ];
console.log("The largest number is "+ A [4]);

// Ques No:9

var A =["Array Items",24, 53, 78, 91, 12 ];
console.log("The smallest number is "+ A [5]);

// QUES No:10

for ( var i=5; i<=50; i++){
 console.log( i+5 + ",")
}
















