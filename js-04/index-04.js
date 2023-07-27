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
  


} else if (question === "product information") {

    const addToCartList = [];
    const removeFromCartList = [];

    const productInfo = {
        name: "lap-top",
        price: 300000,
        brand: "ASUS",
        model: "A12",
        productionYear: 2021,
        graphic: 7
        }

        function addToCart(x) {
            return x
        }

        function removeFromCart(y) {
            return y
        }

        const addORremove = prompt("add or remove product from cart");
        if (addORremove === "add") {
            addToCartList.push({name: "lap-top", price: 300000, brand: "ASUS", model: "A12", productionYear: 2021, graphic: 7})
            for (let i = 0; i < addToCartList.length; i++) {
                console.log(addToCartList[i]);
              }
            console.log("added")
        } else if (addORremove === "remove") {
            removeFromCartList.splice(0, removeFromCart.length);
            console.log("your list is empty now.")
            console.log("removed!")
        }


    } else {
        console.log("type the correct word or phrase!! temperature conversion, word search or product information?");
    }



