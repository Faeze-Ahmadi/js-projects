function calculator (a = 0, op, b = 0) {
    if (!isNaN(a) && !isNaN(b)){
        switch (op) {
            case "+":
                return a + b;
            case "-":
                return a - b;
            case "*":
                return a * b;
            case "/":
                return a / b;
            default:
                return "operator is wrong!"
        }
    } 
    return "one of the numbers is not true!"
}

const leftNum = +prompt("Enter Left Number:");
const operator = prompt("Enter operator:");
const rightNum = +prompt("Enter right Number:");

console.log(calculator(leftNum, operator, rightNum));