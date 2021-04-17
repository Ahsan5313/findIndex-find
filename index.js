const student = [

    {
        id:101,
        gap:2.50
    },
    {
        id:102,
        gap:2.40
    },
    {
        id:103,
        gap:3.00
    },
    {
        id:104,
        gap:3.25
    },
    {
        id:105,
        gap:3.50
    },
    {
        id:106,
        gap:4.00
    }
]
const account = (student.find(x => x.gap>=3.5));
const account1 = (student.findIndex(x => x.gap>=3.5));
console.log(account);
console.log(account1);