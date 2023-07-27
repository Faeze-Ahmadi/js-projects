const question = prompt("temperature conversion, word search or product information?")

if (question === "temperature conversion") {

    function celsiusToFahrenheit(celsius) {
        let fahrenheit = (celsius * 1.8) + 32;
        return fahrenheit;
      }
      
let celsius = parseFloat(prompt("Enter the degree of celsius to change in fahrenheit:"))
console.log(celsiusToFahrenheit(celsius));



} else if (question === "word search") {
    
    function word_search (sentence, word) {
        if (sentence.toLowerCase().includes(word.toLowerCase())) return sentence, word 
        else throw Error("the word is not fined in sentence!")

    }
   

  const sentence = prompt("write youe sentence or phrase:");
  const word = prompt("Enter the word:");

  if (word_search(sentence, word)) {
    console.log("this word is exists in sentence.");
  }
  

}