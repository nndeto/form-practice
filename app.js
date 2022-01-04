// global variables
let passEye = document.querySelector(".password-eye");
let password = document.querySelector("#password");



// functions 
// changing the type auto changes how the password appears
// this allows the user to see the password for a brief moment
function imgChange() {
    passEye.src = "eye.svg";
    password.type = "text"
}

function imgOff() {
    passEye.src = "eye-off.svg";
    password.type = "password"
}



// event listeners

passEye.addEventListener("mouseover", imgChange);
passEye.addEventListener("mouseout", imgOff);