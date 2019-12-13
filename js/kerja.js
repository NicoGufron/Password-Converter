var pass = document.getElementById("password");
var key = document.getElementById("key");
var enc = document.getElementById("encrypt");
var dec = document.getElementById("decrypt");

var rijndael = document.getElementById("rijndael");
var vignere = document.getElementById("vignere");
var playfair = document.getElementById("playfair");
var vernam = document.getElementById("vernam");
    enc.onclick = function(){
        if(pass.value == ""){
            alert('Type in your password');
        }else{
            var passval = pass.value;
            var keyval = key.value;
            vignere.value = encrypt(passval,keyval);
        }
    }
    dec.onclick = function(){
        if(pass.value == ""){
            alert('Type in your password');
        }else{
            caesar.value = pass.value;
        }
    }
function encryptV(pass,key){
    var output = "";
    for (var i = 0; j < pass.length; i++){
        var c = pass.charCodeAt(i);
        if(isUppercase(c)){
            output += String.fromCharCode((c - 65 + key[j % key.length]) % 26 + 65);
            j++;        
        }
        else if(isLowercase(c)){
            output += String.fromCharCode((c - 97 + key[j % key.length]) % 26 + 97);
        }
        else{
            output += pass.charAt(i);
        }
    }
    return output;
}
function decryptV(pass,key){
    
}
function isUppercase(c){
    return 65 <= c&& c <= 90;
}
function isLowercase(c){
    return 97 <= c && c <= 122;
}