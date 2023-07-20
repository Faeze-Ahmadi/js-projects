const leftNumber = +prompt("Enter left-number");
const operator = prompt("Enter the operator");
const rightNumber = +prompt("Enter right-number");

if(isNaN(leftNumber) || isNaN(rightNumber)){
    console.log("left-number or right-number ERR!")
}

if(operator === "+"){
    console.log(leftNumber + rightNumber);
}

if(operator === "-"){
    console.log(leftNumber - rightNumber);
}

if(operator === "*"){
    console.log(leftNumber * rightNumber);
}

if(operator === "/"){
    console.log(leftNumber / rightNumber);
}