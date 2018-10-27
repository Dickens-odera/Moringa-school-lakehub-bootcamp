// js variables
var name  = "Dickens";
var age = 21;

function test(){
    alert("You are "+ name +" and your age is "+ age);
}

var message = prompt("What is your age?");

if(message == null){
    alert("Please provide your age");
}

else{
    alert("Your age is "+ message);
}
function sayHello(){
    alert("hello");
}
test();
