var mainContent = document.getElementById('content');
//new elements :
var inTextArea = document.createElement('textarea');
var outTextArea = document.createElement('textarea');

mainContent.appendChild(inTextArea);
mainContent.appendChild(outTextArea);

//var :
var shift = parseInt(prompt("Nombre de décalage : "));
var alph = [];
for (var i = 0; i < 27; i++) {
    // the start of ASCII alphabet is 97
    alph.push(fromCharCode(i+97));
    console.log(alph[i]);
}

var textIn = inTextArea.innerText;
// main :
