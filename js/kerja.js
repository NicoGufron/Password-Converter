window.onload = function(){
var pass = document.getElementById("password");
var enc = document.getElementById("encrypt");
var dec = document.getElementById("decrypt");

var rijndael = document.getElementById("rijndael");
var caesar = document.getElementById("caesar");
var playfair = document.getElementById("playfair");
var vernam = document.getElementById("vernam");
    enc.onclick = function(){
        if(pass.value == ""){
            alert('Type in your password');
        }else{
            rijndael.innerHTML = pass.value;
        }
    }
    dec.onclick = function(){
        if(pass.value == ""){
            alert('Type in your password');
        }else{
            caesar.innerHTML = pass.value;
        }
    }
}