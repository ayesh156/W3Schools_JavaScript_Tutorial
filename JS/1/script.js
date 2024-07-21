// An onclick event changes an HTML element

var button = document.getElementById("button");

button.onclick = function(){
    document.getElementById('demo').innerHTML = Date();
}

// An onclick event changes its own element

var button2 = document.getElementById("button2");

button2.onclick = function(){
    this.innerHTML = Date();
}

// Javascript in an external file

var button4 = document.getElementById('button4');

button4.onclick = function(){
    document.getElementById('demo4').innerHTML = "Paragraph Changed";
}

// An onclick event calls a function

function displayDate(){
    document.getElementById('demo2').innerHTML = Date();
}

// JavaScript statements can be grouped together in code blocks

var button20 = document.getElementById("button20");

button20.onclick = function(){
    document.getElementById("demo21").innerHTML = "Ayesh Chathuranga!";
    document.getElementById("demo22").innerHTML = "How are you";
}

// A simple function
var button21 = document.getElementById("button21");

button21.onclick = function(){
    document.getElementById("dem1").innerHTML = "Hello world";
}

// A function with an argument
function myFunction1(name,job){
    document.getElementById('dem2').innerHTML = "Welcome " + name + ", the " + job + ".";
}

// A function with an argument 2
function myFunction2(txt){
    document.getElementById('dem3').innerHTML = txt;
}

// An onclick event changes an HTML element
var button22 = document.getElementById("button22");

button22.onclick = function(){
    document.getElementById("dem4").innerHTML = Date();
}

// An onclick event changes its own element
var button23 = document.getElementById("button23");

button23.onclick = function(){
    this.innerHTML = Date();
}

// Search for a text in a string and return the text if found - match()
var button24 = document.getElementById("button24");

button24.onclick = function(){
    var str = "The rain in SPAIN stays mainly in the plain";
    var res = str.match(/ain/g);
    document.getElementById("dem5").innerHTML = res;
}

// Replace characters in a string - replace()
var button25 = document.getElementById("button25");

button25.onclick = function(){
    var txt = document.getElementById("dem6").innerHTML;
    document.getElementById("dem6").innerHTML =
    txt.replace("Microsoft","W3Schools");
}

// Convert string to upper case - toUpperCase()
var button27 = document.getElementById("button27");

button27.onclick = function(){
    var txt = document.getElementById("dem7").innerHTML;
    document.getElementById("dem7").innerHTML =
    txt.toUpperCase();
}

// Convert string to lower case - toLowerCase()
var button28 = document.getElementById("button28");

button28.onclick = function(){
    var txt = document.getElementById("dem8").innerHTML;
    document.getElementById("dem8").innerHTML =
    txt.toLowerCase();
}

// JavaScript Clock 24 hour
function startTime(){
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    m = checkTime(m);
    s = checkTime(s);

    var finalTime = h + ":" + m + ":" + s;
    document.getElementById("txt").innerHTML = finalTime;
    setTimeout(startTime, 1000)
}

function checkTime(i){
    if(i < 10) {
        i = "0" + i;
    }
    return i;
}

// JavaScript Clock 12 hour
function startTime2() {
    var d = new Date();
    var h = d.getHours();
    var AmOrPM = h >= 12 ? 'pm' : 'am';
    h = (h % 12) || 12;
    var m = d.getMinutes();
    var s = d.getSeconds();
    m = checkTime2(m);
    s = checkTime2(s);

    var finalTime = h + ":" + m + ":" + s + " " + AmOrPM;
    document.getElementById("txt2").innerHTML = finalTime;
    setTimeout(startTime2, 1000);
}

function checkTime2(i) {
    if(i < 10) {
        i = "0" + i;
    }
    return i;
}