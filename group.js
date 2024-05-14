"use strict";


let Theincredible2s = [
    { name: "Kayla", age: 28, score: 99, hobbies: ["Photography", "Horseback Riding", "Acro Yoga"] },
    { name: "Kadi", age: 27, score: 99, hobbies: ["badminton", "cooking","outdoor activites"] }
];


Theincredible2s.forEach(name=> {
    console.log(name.hobbies[1]);
});


console.log( `${Theincredible2s[0].name}'s second favorite hobbie is ${Theincredible2s[0].hobbies[1]} `);
console.log( `${Theincredible2s[1].name}'s second favorite hobbie is ${Theincredible2s[1].hobbies[1]} `);

// new array for students aged 23 or higher
let names = Theincredible2s.filter(person => person.age >= 23);

// ages and names
names.forEach(person => {
    console.log(`Name: ${person.name}, Age: ${person.age}`);
});



