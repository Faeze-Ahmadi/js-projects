const question = prompt("what codes do you want? calculator, capital letters or score?")


if (question === "calculator") {
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



} else if (question === "capital letters") {
    function capital_letters (sentense) {
        return sentense
    }

    const sentense = prompt("write the sentense in lowercase letters:");
    console.log(capital_letters(sentense.toUpperCase()))
   


} else if (question === "score") {
    function score (average_score) {
        return average_score
    }

    const scoreList = [];

    for (let i = 1 ; i <= 5; i++) {
        const num = parseFloat(prompt("Enter your score:"))
        scoreList.push(num);
    }

    const sum = scoreList.reduce((acc, curr) => acc + curr, 0);
    const average = sum / scoreList.length;

    console.log(score(average));


} else {
    console.log("type the correct word or phrase!! calculator, capital letters or score?");
}
