const randomList = []

// values for randomDate
const minDate = new Date('1970-01-01').getTime();
const maxDate = new Date('2030-12-31').getTime();

// value for randomWord 
const words = ['JavaScript', 'Python', 'C++', 'html', 'css', 'figma'];



const addRandomParameter = () => {
    const RandomParameter = {
        randomNumber: Math.floor(Math.random() * (10000 - 1 + 1) + 1),
        randomDate: new Date(Math.floor(Math.random() * (maxDate - minDate + 1) + minDate)),
        randomWord: words[Math.floor(Math.random() * words.length)]
    }
    randomList.push(RandomParameter)
}

addRandomParameter()
console.log(randomList)
