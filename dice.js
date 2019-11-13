"use strict"; 

// character = 6 sided die
let charactersArray = ['Mr. Green', 'Professor Plum', 'The Colonel', 'Miss Scarlet', 'Mrs. White', 'Mrs. Peacock'];
// weapon = 12 sided die
let weaponsArray = ['Dagger', 'Candlestick', 'Revolver', 'Rope', 'Lead Pipe', 'Wrench', 'Poison', 'Dumbbell', 'Hair Dryer', 'Frying Pan', 'Baseball Bat', 'Bottle of Whiskey'];
// room = 14 sided die
let roomsArray = ['The Study', 'The Billiard Room', 'The Kitchen', 'The Ballroom', 'The Conservatory', 'The Library', 'The Hall', 'The Lounge', 'The Dining Room', 'The Cellar', 'Attic', 'Bedroom'];
// yes/no = 10 sided die
let yesNoAnswersArray = ['Yes', 'Yes', 'Yes', 'Yes', 'Yes', 'No', 'No', 'No', 'No', 'No'];
// suspects remaining = 4 sided die
let arrayWithinArray = []; 
// verdict/accused suspect = 8 sided die
let verdictDiceArray = [];

// just to show how many dice, can put arrayWithinArray in certain area.

console.log("Oh no! While you were at a dinner party at the mansion of Mr Body, the evening took a turn for the worst when the power went out, and screams rang through the halls. Upon restoring the light, it was found that the butler was murdered!  The suspicious thing is, that we do not know how he died or who did it! It is up to you to figure out who, with what, and in which room of the household. Figure out who did it to win and stop the madness. If the murderer turns out to be you (plot twist!) or you frame the wrong person, you lose!"); 

// let pickCharacter = prompt ("1. Pick the character you would like to be. Type key: 1[Mr. Green], 2[Professor Plum], 3[The Colonel], 4[Miss Scarlet], 5[Mrs. White], 6[Mrs. Peacock]");
    // switch(pickCharacter){
    //     case "1": 
    //         alert("You are Mr. Green, the hustling smooth talker that has a history of scandel.");
    //         break;
    //     case "2":
    //         alert("You picked Professor Plum, the quick-witted professor who may too smart for his own good.");
    //         break;
    //     case "3":
    //         alert("You picked The Colonel, clean cut and gentlemanly with a potentially dangerous side, a military man.");
    //         break;
    //     case "4":
    //         alert("You picked Miss Scarlet, the young and beautiful femme fatale.");
    //         break;
    //     case "5":
    //         alert("You picked Mrs. White, the pale and tragic widow who may have held secrets from her past.");
    //         break;
    //     case "6":
    //         alert("You picked Mrs. Peacock, the elegant wife of a senator.");
    //         break;
    // }

// randomizing the sides, enter how many sides the dice has:
function rollingDice(sides){
    let randomNumber = Math.floor(Math.random() * sides) + 1;
    return randomNumber;
}

function splicingCharacters(oneCharacter){
    oneCharacter = charactersArray.splice(Math.floor(Math.random() * charactersArray.length), 1);
    return oneCharacter;
}
function splicingRooms(oneRoom){
    oneRoom = roomsArray.splice(Math.floor(Math.random() * roomsArray.length), 1);
    return oneRoom;
}
function splicingWeapons(oneWeapon){
    oneWeapon = weaponsArray.splice(Math.floor(Math.random() * weaponsArray.length), 1);
    return oneWeapon;
}

let randomNumber = rollingDice();

// MAIN PROBLEM is that null is still moved to optionArray, want it to be ignored and  move on to next variable. 
let optionOneArray = [];
let oneCharacter = splicingCharacters(charactersArray.length - 1);
optionOneArray.push(oneCharacter);
let oneRoom = splicingRooms(roomsArray.length - 1);
optionOneArray.push(oneRoom);
let oneWeapon = splicingWeapons(weaponsArray.length - 1);
optionOneArray.push(oneWeapon);
optionOneArray = oneCharacter.concat(oneRoom).concat(oneWeapon);
console.log(optionOneArray);

let optionTwoArray = [];
oneCharacter = splicingCharacters(charactersArray.length-1);
optionTwoArray.push(oneCharacter);
oneRoom = splicingRooms(roomsArray.length-1);
optionTwoArray.push(oneRoom);
oneWeapon = splicingWeapons(weaponsArray.length-1);
optionTwoArray.push(oneWeapon);
optionTwoArray = oneCharacter.concat(oneRoom).concat(oneWeapon);
console.log(optionTwoArray);

let optionThreeArray = [];
oneCharacter = splicingCharacters(charactersArray.length-1);
optionThreeArray.push(oneCharacter);
oneRoom = splicingRooms(roomsArray.length-1);
optionThreeArray.push(oneRoom);
oneWeapon = splicingWeapons(weaponsArray.length-1);
optionThreeArray.push(oneWeapon);
optionThreeArray = oneCharacter.concat(oneRoom).concat(oneWeapon);
console.log(optionThreeArray);

let optionFourArray = [];
oneCharacter = splicingCharacters(charactersArray.length-1);
optionFourArray.push(oneCharacter);
oneRoom = splicingRooms(roomsArray.length-1);
optionFourArray.push(oneRoom);
oneWeapon = splicingWeapons(weaponsArray.length-1);
optionFourArray.push(oneWeapon);
optionFourArray = oneCharacter.concat(oneRoom).concat(oneWeapon);
console.log(optionFourArray);

// randomizing an array within an array, all options above into one array. 
arrayWithinArray.push(optionOneArray);
arrayWithinArray.push(optionTwoArray);
arrayWithinArray.push(optionThreeArray);
arrayWithinArray.push(optionFourArray);

// loop below provides 4 choices of rooms/weapons. Need to randomize. Roll the room dice and weapon dice. 
console.log("2. Hmmmm, these rooms and weapons make you most suspicous because of these four hints:");

for (let i = 0; i < arrayWithinArray.length; i++){
console.log("Blood was found in " + arrayWithinArray[i][1] + " (room) along with the " + arrayWithinArray[i][2] + " (weapon).");
}

// loop below provides 4 names of suspects. Need to randomize. Roll the characters dice. 
console.log("3. Did you see that??");
for(let i = 0; i < arrayWithinArray.length; i++){
console.log(arrayWithinArray[i][0] + " has been seen running out of those rooms at the time of the murder.");
}

//Below is an opportunity to rule one suspect out. 
let suspectOneIndex = rollingDice(4)-1;
let suspectOne = arrayWithinArray[suspectOneIndex];
let suspectOneName = suspectOne[0];
console.log("4. Wait a second- We have witnesses. The cook and the maid claim they were with this suspect, " + suspectOneName  +" during the murder. They claim " + suspectOneName + " is not the killer because they had no weapon. Do we trust them?");
console.log("Roll dice to answer. WARNING: If yes is rolled, and they are the killer, the game is over.");

let result = yesNoAnswersArray[rollingDice(10)-1];
let solutionIndex = rollingDice(4)-1;
let solution = arrayWithinArray[solutionIndex];
console.log(solution);

    if(result == "No"){
        console.log(result);
        console.log("Good call, the help have been known to be shifty in the past.");

        console.log("5. We are this close to solving the case! Roll 3 times to narrow down the search.");
        let reachedsolution = Boolean(false);
        for(let i = 0; i < arrayWithinArray.length; i++){
        if(arrayWithinArray[i][0] != solution[0]){
            reachedsolution === false;
        }
    
        else if(arrayWithinArray[i][0] == solution[0]){ 
                console.log(arrayWithinArray[i][0] + " (character) was seen locking the " + arrayWithinArray[i][2] + " (weapon) out the window.");
                     
            }
        }
    }
    
    else if (result == "Yes"){
        console.log(result);
        console.log("You picked yes! Let's see if you let the killer get away- Roll dice again.");

        result = yesNoAnswersArray[rollingDice(10)-1];

        console.log("Is " + suspectOneName + " the killer?");
        
            if(suspectOneName != solution[0]){
                console.log("Whew, close one. " + suspectOneName + " is not the murderer. Atleast we can cross someone off our list!"); // subtract name from list but make sure it is not the solutionArray!
                
                let narrowedArray = arrayWithinArray.splice(suspectOneIndex, 1);
                console.log(narrowedArray);
                let twoSuspectsArray = narrowedArray.splice(0, 1, solution);
                console.log(twoSuspectsArray);

                console.log("5. We are getting close to solving the case! Roll 2 times to narrow down the search.");
                for(let i = 1; i < narrowedArray.length; i++){
                    narrowedArray[rollingDice(i)-1];
                console.log(narrowedArray[i][0] + " (character) was seen tossing the " + narrowedArray[i][2] + " (weapon) into the fireplace.");       
            }
        }
            else if(suspectOneName == solution[0]){
                console.log(result);
                console.log("Oh no! " + suspectOneName + " is the killer! You let the killer get away- You lose! GAME OVER.");
            }
    }

console.log("5. The gig is up! Who do you want to accuse as the murder?");
// roll names instead of numbers***
let accuseSuspectDice = rollingDice(arrayWithinArray.length-1);
console.log("You rolled " + accuseSuspectDice + "!");
console.log("Roll the Verdict Dice to see if you were right!");
verdictDiceArray = solution;
    if(verdictDiceArray == accuseSuspectDice){
        console.log("The suspect you accused was " + accuseSuspectDice + ".");
        console.log("You rolled " + verdictDiceArray);
        console.log("Congrats! You win! You found " + solution + "to be guilty and you were right! They'll be spending a long time behind bars thanks to you.");
    }
    else if(verdictDiceArray == accuseSuspectDice && pickCharacter == verdictDiceArray){
        console.log("The suspect you accused was " + accuseSuspectDice + ".");
        console.log("You rolled " + verdictDiceArray + ".");
        console.log("Did not see that coming- you lost because we caught you red-handed! YOU were the murderer the whole time, too bad you couldn't get away with it!")
    }
    else{
        console.log("You rolled " + verdictDiceArray);
        console.log("Oh no, you framed the wrong person and the murderer got away. You lose!")
    }
//dice will pick correct solutionArray

// If answers match, player wins!