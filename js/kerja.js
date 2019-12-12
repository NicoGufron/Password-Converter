var pass = document.getElementById("password");
var button = document.getElementById("klik");
button.onclick = function(){
    if(pass.value == ""){
        alert('Type in your password');
    }
}