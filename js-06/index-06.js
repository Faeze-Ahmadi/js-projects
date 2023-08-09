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

const addNewPerson = (name, age, id, field) => {
    const name_ = prompt("tell the name?")
    const age_ = +prompt("tell the age?")
    const id_ = +prompt("tell the id?")
    const field_ = prompt("tell the field?")
    return {name_, age_, id_, field_}

}

persons.push(addNewPerson())
console.log(persons)