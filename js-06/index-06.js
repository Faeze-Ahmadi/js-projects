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
    const name = prompt("tell the name?")
    const age = prompt("tell the age?")
    const id = prompt("tell the id?")
    const field = prompt("tell the field?")
    return {name, age, id, field}

}

persons.push(addNewPerson())