var mainContent = document.getElementById('content');

//new elements :
var validBtn = document.createElement('button');
validBtn.name = "validBtn";
validBtn.innerText = "To Cesar Code";
var inTextArea = document.createElement('textarea');
var outTextArea = document.createElement('textarea');

mainContent.appendChild(inTextArea);
mainContent.appendChild(outTextArea);
mainContent.appendChild(validBtn);

//var :
var shift = parseInt(prompt("Nombre de décalage : "));
var alphCesar = [];

for (var i = 0; i < 26-shift; i++) {
    alphCesar.push(String.fromCharCode(i+97+shift));
    // console.log(alphCesar[alphCesar.length-1]);
}
// console.log(alphCesar.length + ">>>>>" + shift);
for (var i = 0; i < shift; i++) {
    alphCesar.push(String.fromCharCode(i+97));
    // console.log(alphCesar[alphCesar.length-1]);
}
console.log("the index of 'a' is : " + alphCesar.indexOf('a'));

//function :
function caesarCodex(){
    var inString = inTextArea.value;
    console.log(inString);
    var outString = "";
    //in the real alphabet the index of letter (i) is : inString.charCodeAt(i) - 97
    console.log("in the real alphabet the index of letter (0) is :" +  inString.charCodeAt(0) - 97);
    for (var i = 0; i < inString.length; i++) {
        if (inString.charCodeAt(i) >= 97 && inString.charCodeAt(i) < 97 + 26){
            // is a letter :
            outString += alphCesar[inString.charCodeAt(i) - 97];
        } else {
            //no change
            outString += inString[i];
        }
    }
    outTextArea.innerText = outString;
}

// main :
validBtn.addEventListener('click', caesarCodex );
