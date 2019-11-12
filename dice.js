"use strict"; 

let charactersArray = ['Mr. Green', 'Professor Plum', 'The Colonel', 'Miss Scarlet', 'Mrs. White', 'Mrs. Peacock'];
let weaponsArray = ['Dagger', 'Candlestick', 'Revolver', 'Rope', 'Lead Pipe', 'Wrench', 'Poison', 'Dumbbell'];
let roomsArray = ['The Study', 'The Billiard Room', 'The Kitchen', 'The Ballroom', 'The Conservatory', 'The Library', 'The Hall', 'The Lounge', 'The Dining Room', 'The Cellar'];
let yesNoAnswersArray = ['Yes', 'No'];

console.log("Oh no! While you were at a dinner party at the mansion of Mr Body, the evening took a turn for the worst when the power went out, and screams rang through the halls. Upon restoring the light, it was found that the butler was murdered!  The suspicious thing is, that we do not know how he died or who did it! It is up to you to figure out who, with what, and in which room of the household. Figure out who did it to win and stop the madness. If the murderer turns out to be you (plot twist!) or you frame the wrong person, you lose!"); 

// let pickCharacter = ("1. Pick the character you would like to be:");
//     switch(pickCharacter){
//         case "Mr. Green": 
//             console.log();
//             break;
//         case "Professor Plum":
//             console.log();
//             break;
//         case "The Colonel":
//             console.log();
//             break;
//         case "Miss Scarlet":
//             console.log();
//             break;
//         case "Mrs. White":
//             console.log();
//             break;
//         case "Mrs. Peacock":
//             console.log();
//             break;
//     }

// randomizing the sides, enter how many sides the dice has:
function rollingDice(sides){
    let randomNumber = Math.floor(Math.random() * sides) + 1;
    return randomNumber;
}

let randomNumber = rollingDice();

// making a correct array that will be the solution of the problem. Trying to pull one part of each array from each array.

let solutionArray = [];
let randomCharacter = charactersArray.pop([rollingDice(6)]); 
solutionArray.push(randomCharacter);
let randomRoom = roomsArray.pop([rollingDice(10)]); 
solutionArray.push(randomRoom);
let randomWeapon = weaponsArray.pop([rollingDice(8)]);
solutionArray.push(randomWeapon);
console.log(solutionArray);

let optionOneArray = [];
randomCharacter = charactersArray.pop([rollingDice(6)]); 
optionOneArray.push(randomCharacter);
randomRoom = roomsArray.pop([rollingDice(10)]); 
optionOneArray.push(randomRoom);
randomWeapon = weaponsArray.pop([rollingDice(8)]);
optionOneArray.push(randomWeapon);
console.log(optionOneArray);

let optionTwoArray = [];
randomCharacter = charactersArray.pop([rollingDice(6)]); 
optionTwoArray.push(randomCharacter);
randomRoom = roomsArray.pop([rollingDice(10)]); 
optionTwoArray.push(randomRoom);
randomWeapon = weaponsArray.pop([rollingDice(8)]);
optionTwoArray.push(randomWeapon);
console.log(optionTwoArray);

let optionThreeArray = [];
randomCharacter = charactersArray.pop([rollingDice(6)]); 
optionThreeArray.push(randomCharacter);
randomRoom = roomsArray.pop([rollingDice(10)]); 
optionThreeArray.push(randomRoom);
randomWeapon = weaponsArray.pop([rollingDice(8)]);
optionThreeArray.push(randomWeapon);
console.log(optionThreeArray);

// randomizing an array within an array, all options above into one array. 
let arrayWithinArray = [];
arrayWithinArray.push(solutionArray);
arrayWithinArray.push(optionOneArray);
arrayWithinArray.push(optionTwoArray);
arrayWithinArray.push(optionThreeArray);
let choiceOne = arrayWithinArray.pop([rollingDice(4)]);
let choiceTwo = arrayWithinArray.pop([rollingDice(4)]);
let choiceThree = arrayWithinArray.pop([rollingDice(4)]);
let choiceFour = arrayWithinArray.pop([rollingDice(4)]);
console.log(choiceOne);

console.log("2. Hmmmm, these rooms make you most suspicous because:");
console.log("Blood was found in " + choiceOne[1] + " (room) along with the " + choiceOne[2] + " (weapon).");
console.log("Blood was found in " + choiceTwo[1] + " (room) along with the " + choiceTwo[2] + " (weapon).");
console.log("Blood was found in " + choiceThree[1] + " (room) along with the " + choiceThree[2] + " (weapon).");
console.log("Blood was found in " + choiceFour[1] + " (room) along with the " + choiceFour[2] + " (weapon).");

console.log("3. Did you see that??");
console.log(choiceOne[0] + " has been seen running out of those rooms at the time of the murder.");
console.log(choiceTwo[0] + " has been seen running out of those rooms at the time of the murder.");
console.log(choiceThree[0] + " has been seen running out of those rooms at the time of the murder.");
console.log(choiceFour[0] + " has been seen running out of those rooms at the time of the murder.");












