const passwordEl = document.getElementById("password");
const copyEl = document.getElementById("copy");
const lenEl = document.getElementById("len");
const upperEl = document.getElementById("upper");
const lowerEl = document.getElementById("lower");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");
const generateEl = document.getElementById("generate");

const upperLetters = "ABCDEFGHIJKLMNÑOPKRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnñopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+";

function getUppercase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getLowercase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getNumber() {
    return numbers[Math.floor(Math.random() *numbers.length)]; 
}

function getSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword () {
   
    const len = lenEl.value;
    let password = "";

    if(upperEl.checked) {          //At least one character of each selection.
        password += getUppercase();
    }

    if(lowerEl.checked) {
        password += getLowercase();
    }

    if(numberEl.checked) {
        password += getNumber();
    }

    if(symbolEl.checked) {
        password += getSymbol();
    }

    for(let i = password.length; i<len ; i++){
        
        const x = generateX();
        password += x;
    }

    passwordEl.innerHTML = password;
}

generateEl.addEventListener("click", generatePassword);

function generateX() {
    
    const xs = [];

    if(upperEl.checked) {
        xs.push(getUppercase());
    }

    if(lowerEl.checked) {
        xs.push(getLowercase());
    }

    if(numberEl.checked) {
        xs.push(getNumber());
    }

    if(symbolEl.checked) {
        xs.push(getSymbol());
    }

    if(xs.length === 0) {
        return "";
    }

    return xs[Math.floor(Math.random() * xs.length)];
   
}

copyEl.addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText(passwordEl.value);
        //console.log(passwordEl.value);  //See the value copied.
    } catch(err) {
        alert("Error al copiar la contraseña");
    }
});
