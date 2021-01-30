function logPhrase(phrase){
    console.log("You said: " + phrase);
    return phrase.length;
}

logPhrase("Hello how are you");
var p = "This is phrase";

var phraseLen = logPhrase(p);
console.log(phraseLen);

function max3(p1, p2, p3){
    if(!(typeof(p1) === typeof(p2) && typeof(p1) === typeof(p3))){
        console.log("Error: mismatched types");
        return -1;
    }
    var max = p1;
    if(p2 > max){
        max = p2;
    }
    if(p3 > max){
        max = p3;
    }
    return max;
}

console.log(typeof(phraseLen));

function getPhrase(phrase, phrase2){
    function phraseConcat(){
        return phrase + " " + phrase2;
    }
    return phraseConcat();
}

var concat = getPhrase(phrase2 = "phrase2"); //selective parameters, probably needs defaults
console.log(concat);

