"use strict";
/* Use the following types in your application: Array, number, string, Boolean.

Use an enum to declare the possible rolled values (Hint: They don't have to be numbers).

Use a class to create your die, including typed properties for the CSS styles needed
(length, width, border, color), and for the value contained within the die.

Create an interface to describe your die's types.

Extend the class with a dieRoller class to create a method for rolling the die.

Create a function to instantiate dice using the dieRoller class, binding elements
using the constructor() function.

Create a button to roll all the dice at once.

The finished product should end up looking something like this, and should randomly
generate a different value from the enum for each individual die when the "Roll Dice" button is pressed.

Refactor your dieRoller class to be a module. DONE

Create a namespace to hold the styling properties of your dice.

Use Lodash to replace your iterator functions, or anywhere else you find it useful.

Leverage the Chance.js library to enhance the randomness of your die rolls.
*/
Object.defineProperty(exports, "__esModule", { value: true });
//Declarations
const diceMixin_js_1 = require("./diceMixin.js");
const diceClasses_js_1 = require("./diceClasses.js");
const randomClass_js_1 = require("./randomClass.js");
let numDados = 6;
//let numColores: number = 9;
let numSides = 12;
let suma;
//Pulsador para jugar
let divButton = new diceClasses_js_1.genericClass();
divButton.setVal(document.createElement('div'));
let divButtonVal = divButton.getVal();
let divButtonValHTML = convertElement(divButtonVal);
/* let divButton: Element = document.createElement('div'); */
divButtonValHTML.style.width = "300px";
divButtonValHTML.style.height = "100px";
divButtonValHTML.style.cssFloat = "left";
divButtonValHTML.style.padding = "50px 50px 0 50px";
let divH1 = document.createElement('div');
divH1.style.width = "350px";
divH1.style.height = "100px";
divH1.style.cssFloat = "left";
divH1.style.padding = "50px 50px 0 50";
divH1.style.lineHeight = "25px";
let button = document.createElement('button');
button.style.width = "250px";
button.style.height = "50px";
button.style.borderRadius = "10px";
divButtonValHTML.appendChild(button);
let h1 = document.createElement('h1');
h1.style.color = "red";
h1.style.textAlign = "center";
divH1.appendChild(h1);
/* interface DiceSet {
  dice: rollDice
} */
let elementSets = [];
let rollDiceClassArray = [];
let randomArray = [];
let titulo = document.createElement('h1');
document.body.appendChild(titulo);
titulo.textContent = "Los dados de la suerte! Juega y Gana!";
titulo.style.textAlign = "center";
titulo.style.margin = "10px";
titulo.style.padding = "10 px";
document.body.appendChild(divButtonValHTML);
document.body.appendChild(divH1);
button.textContent = "Roll Dice";
divButtonValHTML.style.clear = "both";
for (let index = 0; index < numDados; index++) {
    elementSets.push({
        'div': document.createElement('div'),
    });
}
elementSets.map((elem, index) => {
    rollDiceClassArray[index] = new diceMixin_js_1.Dice(elem.div);
    randomArray[index] = new randomClass_js_1.Random(0, numSides - 1);
    randomArray[index].fetchRandomNumber()
        .then(response => {
        randomArray[index].giveMeNumber()
            .then(response => {
            rollDiceClassArray[index].setStyle(response);
        });
    });
    console.log(randomArray[index]);
});
button.onclick = (e) => {
    suma = 0;
    button.setAttribute('disabled', 'true');
    for (let index = 0; index < numDados; index++) {
        let dice = rollDiceClassArray[index];
        randomArray[index].giveMeNumber()
            .then(response => {
            console.log("suma: ", suma);
            suma = dice.setText(response) + suma + 1;
            h1.textContent = "Suma total: " + suma.toString() + " puntos.";
            setTimeout(() => {
                button.removeAttribute('disabled');
            }, 10000);
        });
    }
};
function convertElement(elem) {
    if (!isHTMLElement(elem)) {
        return elem;
    }
    else {
        return elem;
    }
}
function isHTMLElement(x) {
    return x.style !== undefined;
}
//# sourceMappingURL=diceRollingApp.js.map