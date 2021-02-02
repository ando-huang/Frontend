function alertMe(){
    alert("meee");
}

$(document).ready(function(){
    //write all the js here
    //alert("loaded");

    document.getElementById('text').innerHTML = "This is the new text by regular js";
    $('#text').html("This is the new text from jquery");

    document.getElementById('my-input').value = "regular js input change";
    $('.my-input').val("New input value"); //sets the value of the input class '.my-input' = "new input value"

    var el = document.getElementById('text');
    console.log("el in vanilla js : ", el);
    console.log("el in jquery : ", $(el));

    //event listeners (using button)
    $('#start-button').on('click', function(){
        alert("wow button click so cool");
    });
    $('#start-button').on('mouseleave', function(){
        console.log("hovering");
    })



}); //we are taking the javascript doc var and turning it into jquery obj, we converted it

