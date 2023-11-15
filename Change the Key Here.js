      
function Encrypt(Password, key) {
    let Encrypted = '';
    for (let i = 0; i < Password.length; i++) {
        const charCode = Password.charCodeAt(i) + key;
        Encrypted += String.fromCharCode(charCode);
    }
    return Encrypted;
}

function Decrypt(Encrypted, key) {
    let Decrypted = '';
    for (let i = 0; i < Encrypted.length; i++) {
        const charCode = Encrypted.charCodeAt(i) - key;
        Decrypted += String.fromCharCode(charCode);
    }
    return Decrypted;
}

//The Key should be entered here
function EncryptPassword() {
    const Password = document.getElementById("Password").value;
    const key = 7;
    const Encrypted = Encrypt(Password, key);
    document.getElementById("Encrypted").textContent = Encrypted;
}

//Use the same Key here as well
function DecryptPassword() {
    const Encrypted = document.getElementById("Encrypted").textContent;
    const key = 7;
    const Decrypted = Decrypt(Encrypted, key);
    document.getElementById("Decrypted").textContent = Decrypted;
}