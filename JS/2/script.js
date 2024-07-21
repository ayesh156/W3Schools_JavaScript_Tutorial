// What Can JavaScript Do?
var button2 = document.getElementById("button2");

button2.onclick = function(){
    document.getElementById("demo2").innerHTML = "Hello JavaScript";
}

// JavaScript can change HTML attribute value
var button3 = document.getElementById('button3');
var button4 = document.getElementById('button4');

button3.onclick = function(){
    document.getElementById('myImage').src = "2.png";
}

button4.onclick = function(){
    document.getElementById('myImage').src = "1.png";
}

// JavaScript Can Change style of an HTML Element.
var button5 = document.getElementById("button5");

button5.onclick = function(){
    document.getElementById('demo3').style.fontSize = "30px";
    document.getElementById('demo3').style.background = "white";
    document.getElementById('demo3').style.textAlign = "center";
    document.getElementById('demo3').style.color = "red";
    document.getElementById('demo3').style.display = "block";
}

button6.onclick = function(){
    document.getElementById('demo3').style.display = "none";
}

// The try...catch statement with a confirm box
var button7 = document.getElementById("button7");
var txt = "";
button7.onclick = function() {
    txt = "There was an error on this page.\n\n";
    txt += "Click OK to continue viewing this page.\n";
    txt += "or Cancel to return to the home page.\n\n";
    if(!confirm(txt)){
        document.location.href = "https://w3schools.com";
    }
}

// The onerror event
var button8 = document.getElementById("button8");
onerror = handleErr;
var txt = "";
function handleErr(msg,url,l){
    txt = "There was an error on this page.\n\n";
    txt += "Error: " + msg + "\n";
    txt += "URL: " + url + "\n";
    txt += "Line: " + l + "\n";
    txt += "Click OK to Continue.\n\n";
    alert(txt);
    return true;
}

button8.onclick = function() {
    adddlert("Welcome guest!");
}

// Search for an expression and replace it
var button9 = document.getElementById("button9");

button9.onclick = function() {
    var txt = document.getElementById("demo75").innerHTML;
    document.getElementById("demo75").innerHTML = txt.replace(/Microsoft/i , "W3Schools");
}