function ecnryptButton(){
    var pass = document.getElementById("password").value;
    var key = document.getElementById("key").value;
    var enc = document.getElementById("encrypt");
    var dec = document.getElementById("decrypt");

    var rijndael = document.getElementById("rijndael");
    var vignere = document.getElementById("vignere");
    var playfair = document.getElementById("playfair");
    var vernam = document.getElementById("vernam");
       

    if(pass == ""){
        alert('Type in your password');
    }else{
        vignere.value = encryptV(pass,key);

        playfair.value = encryptPF(pass, key);
    }

    //Vignere
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
    //Vignere

    //PlayFair
    function encryptPF (plain, key) {
        key = constructKeyMatrix(key);
        plain = editPlain(plain);
        result = encryptPlayFair(plain, key);
        return result;
    }

    function constructKeyMatrix(key) {
        const alphabet = "abcdefghiklmnopqrstuvwxyz";
        key += alphabet;
        for (let i = 0; i < key.length; i++) {
        if (key.indexOf(key[i]) !== i) {
            key = key.slice(0, i) + key.slice(i + 1);
            i--;
        }
        }
        return key;
    }

    function editPlain(plain) {
        for (let i = 0; i < plain.length - 1; i += 2) {
        if (plain[i] === plain[i + 1])
            plain = plain.slice(0, i + 1) + 'x' + plain.slice(i + 1);
        }
    
        if (plain.length % 2 === 1) plain += 'x';
    
        plain = plain.replace(/j/g, 'i');
        return plain;
    }

    function encryptPlayFair(plaintext, key) {
        var ciphertext = "";
        for (let i = 0; i < plaintext.length - 1; i += 2) {
    
        var i1, i2, j1, j2;
        
        i1 = key.indexOf(plaintext[i]) / 5 | 0;
        j1 = key.indexOf(plaintext[i]) % 5;
    
        i2 = key.indexOf(plaintext[i + 1]) / 5 | 0;
        j2 = key.indexOf(plaintext[i + 1]) % 5;
    
            //same row
            if (i1 == i2){
                // i1, (j1 + 1) % 5 and i2, (j2 + 1) % 5
                ciphertext += key[i1 * 5 + (j1 + 1) % 5] + key[i2 * 5 + (j2 + 1) % 5];
            }
            //same column
            else if (j1 == j2) {
                //(i1 + 1) % 5, j1 and (i2 + 1) % 5, j2
                ciphertext += key[((i1 + 1) % 5) * 5 + j1] + key[((i2 + 1) % 5) * 5 + j2];
            }
            else {
                // i1, j2 and i2, j1
                ciphertext += key[i1 * 5 + j2] + key[i2 * 5 + j1];
            }
        }
        return ciphertext;

