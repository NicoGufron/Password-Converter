window.onload = function(){
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
            var vignerehasil = pass + key;
            alert(vignerehasil);
        }
    }
    dec.onclick = function(){
        if(pass.value == ""){
            alert('Type in your password');
        }else{
            caesar.value = pass.value;
        }
    }
}