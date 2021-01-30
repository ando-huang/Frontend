//in the html, include this script at the bottom of the body\
/* multi line comments, just like java*/

var alert_message = "this is the message saved in a var";
const console_message = "this is a constant message";
var curr_age = 20;
var exact_age = 20.4;

alert(alert_message);
console.log(console_message);
console.log("My year next year will be " + (curr_age++));

var tf = true; //false;

if(curr_age == 20){
    console.log("curr_age is equal to 20");
}

else{
    console.log("curr_age is not equal to 20");
}

var isPremium = false;
if(isPremium){
    //do x
}

for(var i = 0; i < 10; i++){
    console.log(i);
}

function f(){

}
var btn = document.getElementById("Start-button");  //this is the id from the tag
function buttonClicked(){
    console.log("Button Clicked");
    btn.removeEventListener("click", buttonClicked); //unties this function from button clicked
    document.getElementById("text").innerHTML = "don't click it";
}
btn.addEventListener("click", buttonClicked); //first var is the event, second is the function to call

var items = [];
for(var i = 0; i < 10; i++){
    items.push(i); //append
    //pop(); //regular pop
}
console.log(items[5]); //should log 6
items.length; //not function
console.log(items.shift());
console.log(items.unshift(-1));
items.forEach(function(i, ie){
    console.log(i, ie);
});
var indx = items.indexOf(2);

//splice(i, k) removes k elements starting from index i, returns the splice
items.splice(indx, 1);

var isInItems = items.indexOf(4);
if (isInItems > -1){
    //then the item is in items
}

//use === for value and type match, !== to check if either type/value are wrong

function buttonClick(){
    var customText = document.getElementsByClassName("my-input");
    var results = document.getElementById("text");
    results.innerHTML = "Hello, " + customText[0].value; //html code is valid within qutoes
}
