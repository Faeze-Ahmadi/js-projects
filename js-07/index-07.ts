type persons = {
    name: string;
    family_name: string;
    age: number;
    job: string;
    married: boolean;
    genger: "male" | "female";
    height: number | string;
    weight: number | string;
    id: number;
    phone_number: number;
}

const persons_info: Array<persons> = [
    {
        name: "faeze",
        family_name: "ahamdi",
        age: 20,
        job: "writer",
        married: false,
        genger: "female",
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
        genger: "female",
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
        genger: "male",
        height: 191,
        weight: 87,
        id: 313,
        phone_number: 9142498734,
    }
]

