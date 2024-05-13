"use strict";

let mother = {
    name: "Isma",
    age: 54,
    occupation: "group home",
    hobbies: ["spending time with family", "cooking"],
    favoriteColor: "red",
    birthplace: "guinee",
    favoriteFoods: ["pasta", "rice and stew"],
    favoriteSayings: ["you will miss me when iam gone"],
    giftIdeas: ["a vacation to saudi arabia", "a house"]
};

const messages = [
    "Thank you for always taking care off me!",
    "I owe you the world.",
     "You are a blessing in my life",
     "You are kind",
     "You are loved"

];

function displayMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    document.getElementById('message').textContent = messages[randomIndex];
}

