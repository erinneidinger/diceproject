"use strict"; 

// character = 6 sided die
let charactersArray = ['Mr. Green', 'Professor Plum', 'The Colonel', 'Miss Scarlet', 'Mrs. White', 'Mrs. Peacock'];
// weapon = 12 sided die
let weaponsArray = ['Dagger', 'Candlestick', 'Revolver', 'Rope', 'Lead Pipe', 'Wrench', 'Poison', 'Dumbbell', 'Hair Dryer', 'Frying Pan', 'Baseball Bat', 'Bottle of Whiskey'];
// room = 14 sided die
let roomsArray = ['The Study', 'The Billiard Room', 'The Kitchen', 'The Ballroom', 'The Conservatory', 'The Library', 'The Hall', 'The Lounge', 'The Dining Room', 'The Cellar', 'Attic', 'Bedroom'];
// do we trust the Maid, Cook or No one? 3 sided die
let trustArray = ['The Cook.', 'The Maid.', 'I do not trust anyone.'];
// yes/no = 4 sided die
let yesNoArray = ['Yes', 'No', 'Yes', 'No'];
// suspects/ witness = 3 sided die
let arrayWithinArray = []; 
// hint = 5 sided die
let hintDie = ['1', '2', '3', '4', '5'];
// verdict/accused suspect = 4 sided die
let verdictDiceArray = [];

// just to show how many dice, can put arrayWithinArray in certain area.

alert("Oh no! While you were at a dinner party at the mansion of Mr Body, the evening took a turn for the worst when the power went out, and screams rang through the halls. Upon restoring the light, it was found that the butler was murdered!  The suspicious thing is, that we do not know how he died or who did it! It is up to you to figure out who, with what, and in which room of the household. Figure out who did it to win and stop the madness. If the murderer turns out to be you (plot twist!) or you frame the wrong person, you lose!"); 

let pickCharacter = prompt ("1. Pick the character you would like to be. Type key: 1[Mr. Green], 2[Professor Plum], 3[The Colonel], 4[Miss Scarlet], 5[Mrs. White], 6[Mrs. Peacock]");
    switch(pickCharacter){
        case "1": 
            alert("You are Mr. Green, the hustling smooth talker that has a history of scandel.");
            break;
        case "2":
            alert("You picked Professor Plum, the quick-witted professor who may too smart for his own good.");
            break;
        case "3":
            alert("You picked The Colonel, clean cut and gentlemanly with a potentially dangerous side, a military man.");
            break;
        case "4":
            alert("You picked Miss Scarlet, the young and beautiful femme fatale.");
            break;
        case "5":
            alert("You picked Mrs. White, the pale and tragic widow who may have held secrets from her past.");
            break;
        case "6":
            alert("You picked Mrs. Peacock, the elegant wife of a senator.");
            break;
    }

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

// dice roll for option 1, including random character, room and weapon
let optionOneArray = [];
let oneCharacter = splicingCharacters(charactersArray.length - 1);
optionOneArray.push(oneCharacter);
let oneRoom = splicingRooms(roomsArray.length - 1);
optionOneArray.push(oneRoom);
let oneWeapon = splicingWeapons(weaponsArray.length - 1);
optionOneArray.push(oneWeapon);
optionOneArray = oneCharacter.concat(oneRoom).concat(oneWeapon);
// console.log(optionOneArray);

// dice roll for option 2, including random character, room and weapon
let optionTwoArray = [];
oneCharacter = splicingCharacters(charactersArray.length-1);
optionTwoArray.push(oneCharacter);
oneRoom = splicingRooms(roomsArray.length-1);
optionTwoArray.push(oneRoom);
oneWeapon = splicingWeapons(weaponsArray.length-1);
optionTwoArray.push(oneWeapon);
optionTwoArray = oneCharacter.concat(oneRoom).concat(oneWeapon);
// console.log(optionTwoArray);

// dice roll for option 3, including random character, room and weapon
let optionThreeArray = [];
oneCharacter = splicingCharacters(charactersArray.length-1);
optionThreeArray.push(oneCharacter);
oneRoom = splicingRooms(roomsArray.length-1);
optionThreeArray.push(oneRoom);
oneWeapon = splicingWeapons(weaponsArray.length-1);
optionThreeArray.push(oneWeapon);
optionThreeArray = oneCharacter.concat(oneRoom).concat(oneWeapon);
// console.log(optionThreeArray);

// dice roll for option 4, including random character, room and weapon
let optionFourArray = [];
oneCharacter = splicingCharacters(charactersArray.length-1);
optionFourArray.push(oneCharacter);
oneRoom = splicingRooms(roomsArray.length-1);
optionFourArray.push(oneRoom);
oneWeapon = splicingWeapons(weaponsArray.length-1);
optionFourArray.push(oneWeapon);
optionFourArray = oneCharacter.concat(oneRoom).concat(oneWeapon);
// console.log(optionFourArray);

// randomizing an array within an array, all options above into one array. 
// pushing all options into one dice, the verdict dice. 
arrayWithinArray.push(optionOneArray);
arrayWithinArray.push(optionTwoArray);
arrayWithinArray.push(optionThreeArray);
arrayWithinArray.push(optionFourArray);

// loop below provides 4 choices of rooms/weapons. Roll the room dice(14 sided) and weapon dice(8) for 4 leads. 
alert("2. Roll the rooms and weapons dice 4 times to see which rooms and weapons make you most suspicous:");

for (let i = 0; i < arrayWithinArray.length; i++){
alert ("Blood was found in " + arrayWithinArray[i][1] + " (room) along with the " + arrayWithinArray[i][2] + " (weapon).");
}

// loop below provides 4 names of suspects. Need to randomize. Roll the characters dice for 4 leads. 
alert("3. Did you see that?? Roll the characters die for 4 more leads!");
for(let i = 0; i < arrayWithinArray.length; i++){
alert (arrayWithinArray[i][0] + " has been seen running out of those rooms at the time of the murder.");
}

//Below is an opportunity to rule one suspect out. 
let suspectOneIndex = rollingDice(4)-1;
let suspectOne = arrayWithinArray[suspectOneIndex];
let suspectOneName = suspectOne[0];
alert("4. Wait a second- We have a witness. The cook claimed he was with this suspect, " + suspectOneName  +", around the time the murder was occuring. He claims " + suspectOneName + " is not the killer because they had no weapon.");
alert("The maid disagrees- she thought she did see this suspect dash by while she was was looking for the light. Who do we trust?")
alert("Roll dice to answer if you trust the cook, the maid, or you do not trust anyone. WARNING: If you do decide to trust the cook, and the suspect turns out to be the murderer, the game is over.");

let result = trustArray[rollingDice(3)-1];
let solutionIndex = rollingDice(4)-1;
let solution = arrayWithinArray[solutionIndex];
// console.log(solution);

let narrowedArray;

    if(result == 'I do not trust anyone.' || result == 'The Maid.'){
        alert ("You rolled: " + result + " Good call, the cook has been known to be shifty in the past.");

        alert ("5. We are this close to solving the case! Roll 3 times to narrow down the search.");
        // red flag with Boolean still?
        let reachedsolution = Boolean(false);
        for(let i = 0; i < arrayWithinArray.length; i++){
        if(arrayWithinArray[i][0] != solution[0]){
            reachedsolution == false;
        }
    
        else if(arrayWithinArray[i][0] != solution[0]){ 
                console.log(arrayWithinArray[i][0] + " (character) was seen locking the " + arrayWithinArray[i][2] + " (weapon) out the window.");
                     
            }
        }
    }
    
    else if (result == "The Cook."){
        alert("You picked the cook! Let's see if you let the killer get away- Roll dice again.");

        result = yesNoArray[rollingDice(4)-1];
        
            if(suspectOneName != solution[0]){
                alert ("So, is " + suspectOneName + " the killer? Whew, close one. " + suspectOneName + " is not the murderer. Atleast we can cross someone off our list!"); 
                
                narrowedArray = arrayWithinArray.splice(suspectOneIndex, 1);
                console.log(narrowedArray);
                let twoSuspectsArray = narrowedArray.splice(0, 1, solution);
                console.log(twoSuspectsArray);

                alert ("5. We are getting close to solving the case! Roll 2 times to narrow down the search.");
                for(let i = 1; i < narrowedArray.length; i++){
                    narrowedArray[rollingDice(i)-1];
                alert (narrowedArray[i][0] + " (character) was seen tossing the " + narrowedArray[i][2] + " (weapon) into the fireplace.");       
            }
        }
            else if(suspectOneName == solution[0]){
                alert (result);
                alert ("Oh no! " + suspectOneName + " is the killer! You let the killer get away- You lose! GAME OVER.");
            }
    }

// Roll the 5 sided hint dice for a hint!
alert ("The gang found more evidence! But you have to know the right people. Roll the 5-sided dice- if you land on an odd number you will recieve a hint. Press OK to roll die.");
    let pickHint = hintDie[rollingDice(5)-1];
    switch(pickHint){
            case "1":
                alert("You landed on 1! Ready for the clue? Here it is: In " + solution[1] + " we found the butler's tray he was carrying right before he was murdered.");
                break;
            case "2":
                alert("Sorry, you landed on 2. I'll have to keep you out of the loop.");
                break;
            case "3":
                alert("Looks like you're friends with the right people, because you landed on a 3! Here it is: We found a hidden photograph of the butler in " + solution[0] + "'s purse, with a red X running through it.");
                break;
            case "4":
                alert("Bad luck, you landed on a 4. Guess I'll have to keep you out of the loop.");
                break;
            case "5":
                alert("Way to be in the know, and land on lucky number 5! Here it is: " + solution[2] + " was found with fingerprints that matched one of our accused suspects.");
                break;
    }

// Narrowed down the suspects to two. Who do you think done it? Figure out what narrowedArray 0 and 1 are. 
alert ("6. The gig is up! Who do you want to accuse as the murder? Type 1 to pick " + narrowedArray[0] + " and Type 2 to pick " + narrowedArray[1] + " .");
        let pickSuspect = narrowedArray[rollingDice(2)-1]
switch(pickSuspect){
        case narrowedArray[0] = "1":
            alert("You are picking " + narrowedArray[0] + " .");
            break;
        case narrowedArray[1] = "2":
            alert("You are picking " + narrowedArray[1] + " .");
            break;
}

// Roll the Verdict Dice
console.log("Roll the Verdict Dice to see if you were right!");
    if(solution == pickSuspect){
        console.log("The suspect you accused was " + pickSuspect[0] + " in the " + pickSuspect[1] + " with the " + pickSuspect[2] + ".");
        console.log("You rolled " + solution[0] + " in the " + solution[1] + " with the " + solution[2] + ".");
        console.log("Congrats! You win! You found " + solution[0] + "to be guilty and you were right! They'll be spending a long time behind bars thanks to you.");
    }
    else if(solution == pickSuspect && pickCharacter == solution[0]){
        console.log("The suspect you accused was " + pickSuspect[0] + " in the " + pickSuspect[1] + " with the " + pickSuspect[2] + ".");
        console.log("You rolled " + solution[0] + " in the " + solution[1] + " with the " + solution[2] + ".");
        console.log("Did not see that coming- you lost because we caught you red-handed! YOU were the murderer the whole time, too bad you couldn't get away with it!")
    }
    else{
        console.log("You rolled " + solution[0] + " in the " + solution[1] + " with the " + solution[2] + ".");
        console.log("Oh no, you framed the wrong person and the murderer got away. You lose!")
    }