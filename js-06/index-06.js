const question = prompt("tell me what codes do you want: add, remove or edit object?");

const persons = [{
    name: 'dorsa',
    age: 20,
    id: 347,
    field: 'mechanic'
}, {
    name: 'sahar',
    age: 23,
    id: 717,
    field: 'camputer science'
}, {
    name: 'bahare',
    age: 20,
    id: 371,
    field: 'economy'
}]


if (question === "add") {
const addNewPerson = (name, age, id, field) => {
    const name_ = prompt("tell the name?")
    const age_ = +prompt("tell the age?")
    const id_ = +prompt("tell the id?")
    const field_ = prompt("tell the field?")
    return {name_, age_, id_, field_}
}
persons.push(addNewPerson())
console.log(persons)


 
} else if (question === "remove") {
const indexNum = +prompt("tell the number of obj, that will remove?")
persons.splice(indexNum, 1)
console.log(persons)



} else if (question === "edit") {
    for (let i = 0; i < persons.length; i++){
        if (persons[i].id === 717) {
            persons[i].name = "faeze";
        }
    }

console.log(persons)

} else {
    console.log("type the correct word or phrase!! add, remove or edit?");
}
