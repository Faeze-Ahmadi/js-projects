"use strict";
const persons_info = [
    {
        name: "faeze",
        family_name: "ahamdi",
        age: 20,
        job: "writer",
        married: false,
        gender: "female",
        height: 157,
        weight: 48,
        id: 717,
        phone_number: 9196798193,
    }, {
        name: "sara",
        family_name: "moradi",
        age: 25,
        job: "teacher",
        married: true,
        gender: "female",
        height: 167,
        weight: 56,
        id: 219,
        phone_number: 9177568909,
    }, {
        name: "matin",
        family_name: "rad",
        age: 30,
        job: "bloger",
        married: true,
        gender: "male",
        height: 191,
        weight: 87,
        id: 313,
        phone_number: 9142498734,
    }
];
const question = prompt("tell me what codes do you want: add, remove or edit, sort object?");
if (question === "add") {
    const addNewPerson = () => {
        const name_ = prompt("tell the name?");
        const family_name_ = prompt("tell the family name?");
        const age_ = Number(prompt("tell the age?"));
        const job_ = prompt("tell the job?");
        const married_ = Boolean(prompt("tell the marital status?"));
        const gender_ = prompt("tell the gender?");
        const height_ = prompt("tell the height?");
        const weight_ = prompt("tell the weight?");
        const id_ = Number(prompt("tell the ID?"));
        const phone_number_ = Number(prompt("tell the phone number?"));
        return {
            name: name_,
            family_name: family_name_,
            age: age_,
            job: job_,
            married: married_,
            gender: gender_,
            height: height_,
            weight: weight_,
            id: id_,
            phone_number: phone_number_,
        };
    };
    persons_info.push(addNewPerson());
    console.log(persons_info);
}
else if (question === "remove or edit") {
    for (let i = 0; i < persons_info.length; i++) {
        const id_Q = prompt("tell the id");
        if (persons_info[i].id === Number(id_Q)) {
            persons_info[i].name = prompt("tell the person name");
        }
        else {
            persons_info.slice(i, 1);
            break;
        }
    }
    console.log(persons_info);
}
else if (question === "sort") {
    persons_info.sort((a, b) => a.name.localeCompare(b.name));
    console.log(persons_info);
}
else {
    console.log("type the correct word or phrase!! add, remove or edit, sort?");
}
