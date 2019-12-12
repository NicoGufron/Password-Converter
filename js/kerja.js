var pass = document.getElementById("password");
var button = document.getElementById("submit");
button.onclick = function(){
    if(pass.value == ""){
        alert('Type in your password');
    }
}