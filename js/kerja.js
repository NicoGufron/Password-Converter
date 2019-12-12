
    var pass = document.getElementById("id");
    var button = document.getElementById("submit");

    button.onclick = function(){
        this.alert(pass);
        rijndael.innerHTML = pass.value;
    }