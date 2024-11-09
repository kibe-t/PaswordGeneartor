const  passwordBox=document.getElementById("password");
const length= 4;

const upperCase="ABCDEFGHIJKLMONPQRSTUVWXYZ"
const lowerCase="abcdefghijklmonpqrstuvwxyz"
const number="0123456789"
const symbol=",/%$#@!*&~?|<>?+_=)({}"

const allchar= upperCase + lowerCase + number + symbol

function creatpassword(){
    let password=""
    password+=upperCase[Math.floor(Math.random()* upperCase.length)]
    password+=lowerCase[Math.floor(Math.random()* lowerCase.length)]
    password+=number[Math.floor(Math.random()* number.length)]
    password+=symbol[Math.floor(Math.random()* symbol.length)]

    while(length < password.length){
        password+=allchar[Math.floor(Math.random()+ allchar.length)]
    }
    passwordBox.value=password;
}

function copypassword(){
    passwordBox.Select();
    document.execCommand("copy")
}