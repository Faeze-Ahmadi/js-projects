const randomList = [{
    randomNumber,
    randomDate,
    randomWord,
}]

const minDate = new Date('1970-01-01').getTime();
const maxDate = new Date('2030-12-31').getTime();
// const randomDate = new Date(Math.floor(Math.random() * (maxDate - minDate + 1) + minDate));
const words = ['JavaScript', 'Python', 'C++', 'html', 'css', 'figma'];
// const randomWord = words[Math.floor(Math.random() * words.length)];


const addRandomParameter = (number, date, word) => {
    if (!number && !date && !word) return null;
    const RandomParameter = {
        randomNumber: Math.floor(Math.random() * (10000 - 1 + 1) + min),
        randomDate: new Date(Math.floor(Math.random() * (maxDate - minDate + 1) + minDate)),
        randomWord: words[Math.floor(Math.random() * words.length)]
    }
    randomList.push(RandomParameter)
}

addRandomParameter()
console.log(randomList)
