document.addEventListener('DOMContentLoaded', () =>{
let passwordInput = document.querySelector('#password-input input[type="password"] ');
let passwordStrength = document.getElementById('password-strength');
let poor = document.querySelector('#password-strength #poor');
let weak = document.querySelector('#password-strength #weak');
let strong = document.querySelector('#password-strength #strong');
let passwordInfo = document.getElementById('passwordInfo');


let poorRegExp = /[a-z]/;
let weakRegExp = /(?=.*?[0-9])/;
let strongRegExp = /(?=.*?[#?!@$%^&*-])/;
let whitespaceRegExp = /^$|\s+/;


passwordInput.oninput = function (){
    let passwordValue = passwordInput.value;
    let passwordLength = passwordValue.length;

    let poorPassword = passwordValue.match(poorRegExp);
    let weakPassword = passwordValue.match(weakRegExp);
    let strongPassword = passwordValue.match(strongRegExp);
    let whitespace = passwordValue.match(whitespaceRegExp);

    if(passwordValue != ""){
        passwordStrength.style.display = 'block';
        passwordStrength.style.display = 'flex';
        passwordInfo.style.display = 'block';
        passwordInfo.style.color = 'black';

        if(whitespace){
            passwordInfo.textContent = "whitespaces are not alloowed";
        }else{
            poorPasswordStrength(passwordLength,poorPassword,weakPassword,strongPassword);
            weakPasswordStrength(passwordLength,poorPassword,weakPassword,strongPassword);
            strongPasswordLength(passwordLength,poorPassword,weakPassword,strongPassword);
        }
    }else{
        passwordStrength.style.display = "none";
        passwordInfo.style.display = "none";
    }
}

function poorPasswordStrength(passwordLength,poorPassword,weakPassword,strongPassword){
    if(passwordLength <= 3 && (poorPassword || weakPassword || strongPassword)){
        poor.classList.add("active");
        passwordInfo.style.display = "block";
        passwordInfo.style.color = "red";
        passwordInfo.textContent = "Your Password is too Poor";
    }
}

function weakPasswordStrength(passwordLength,poorPassword,weakPassword,strongPassword){
    if(passwordLength >= 4 && poorPassword && (weakPassword || strongPassword)){
        weak.classList.add("active");
        passwordInfo.textContent = "Your password is weak";
        passwordInfo.style.color = "orange";
    }else{
        weak.classList.remove("active");
    }
}


function strongPasswordStrength(passwordLength,poorPassword,weakPassword,strongPassword){
    if(passwordLength >= 6 && (poorPassword && weakPassword) && strongPassword){
        poor.classList.add = ("active");
        weak.classList.add = ("active");
        strong.classLust.add = ("active");
        passwordInfo.textContent = "Your passoword is strong";
        passwordInfo.style.color = "green";
    }else{
        strong.classList.remove("active");
    }
}

let showHide = document.querySelector('#password-input #showHide');

showHide.onClick = function(){
    showHidePassword();
}

function showHidePassword(){
    if(passwordInput.type == "password"){
        passwordInput.type = "text";
        showHide.textContent = "HIDE";
        showHide.style.color = "green";
    }else{
        passwordInput.type = "password";
        showHide.textContent = "SHOW";
        showHide.style.color = "red";
    }
}
})