const empty = "",
    uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lCase = "abcdefghijklmnopqrstuvwxyz",
    number = "0123456789",
    symbol = "!@#$%^&*=-_";

const copy = document.querySelector(".copy"),
    red = document.querySelector(".red"),
    copied = document.querySelector(".copied"),
    inputPassword = document.querySelector(".input"),
    passLength = document.querySelector(".pass-length"),
    passUppercase = document.querySelector(".pass-uppercase"),
    passLowercase = document.querySelector(".pass-lowercase"),
    passNumber = document.querySelector(".pass-number"),
    passSymbol = document.querySelector(".pass-symbol"),
    generateBtn = document.querySelector(".generate-btn");

generateBtn.addEventListener("click", () => {
    let initialPassword = empty;

    passUppercase.checked ? (initialPassword += uCase) : "";
    passLowercase.checked ? (initialPassword += lCase) : "";
    passNumber.checked ? (initialPassword += number) : "";
    passSymbol.checked ? (initialPassword += symbol) : "";

    inputPassword.value = generatePassword(initialPassword, passLength.value);
});

function generatePassword(str, length) {
    let generatePass = "";
    let passwords = str.split("");
    if (passwords.length !== 0) {
        for (let i = 0; i < length; i++) {
            let randomNum = Math.floor(Math.random() * passwords.length);
            generatePass += passwords[randomNum];
        }
        return generatePass;
    } else {
        return "";
    }
}

// COPY FUNC
copy.addEventListener("click", () => {
    if (inputPassword.value === "") {
        red.classList.add("active");
        setTimeout(() => {
            red.classList.remove("active");
        }, 2000);
    } else {
        inputPassword.select();
        document.execCommand("copy");

        copy.innerHTML = "Copied !";
        setTimeout(() => {
            copy.innerHTML = "Copy";
        }, 2000);
        
        copied.classList.add("active");
        setTimeout(() => {
            copied.classList.remove("active");
        }, 2000);
    }
});
