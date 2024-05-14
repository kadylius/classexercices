"use strict"

"use strict"

window.onload = function() {

    //Name of Fuction, prefrix INIT to indicate this is the first thing to Do
    initLoadDropdownGiftIdeas()
}
function initLoadDropdownGiftIdeas() {
        // load the dropdown list
      //  let states = ["Alabama", "Alaska", "Arizona", ... ];

}

let gifts = [
    { idea: "A house", value: "Gift1" },
    { idea: "A vacation", value: "Gift2" },
    { idea: "A rose", value: "Gift3" },
    { idea: "A photoalbum", value: "Gift4" }
]


gifts[0].value;
//Grab the list from HTML
const giftList = document.getElementById("giftIdeas");
let amoutOfGifts = gifts.length;
for (let i = 0; i < amoutOfGifts; i++) {
// create the option element
let theOption = document.createElement("option");
// set the text and value of the option you created
theOption.textContent = gifts[i].idea; 
theOption.value = gifts[i].value; 
// append the option as a child of (inside) the 
// select element

// ADDing the elements to the list 
giftList.appendChild(theOption);
}