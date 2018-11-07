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
var dice_js_1 = require("./dice.js");
var numDados = 10;
var suma;
//Pulsador para jugar
var divButton = document.createElement('div');
divButton.style.width = "300px";
divButton.style.height = "100px";
divButton.style.cssFloat = "left";
divButton.style.padding = "50px 50px 0 50px";
var divH1 = document.createElement('div');
divH1.style.width = "350px";
divH1.style.height = "100px";
divH1.style.cssFloat = "left";
divH1.style.padding = "50px 50px 0 50";
divH1.style.lineHeight = "25px";
var button = document.createElement('button');
button.style.width = "250px";
button.style.height = "50px";
button.style.borderRadius = "10px";
divButton.appendChild(button);
var h1 = document.createElement('h1');
h1.style.color = "red";
h1.style.textAlign = "center";
divH1.appendChild(h1);
var getRandomIntInclusive = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
/* interface DiceSet {
  dice: rollDice
} */
var elementSets = [];
var rollDiceClassArray = [];
var titulo = document.createElement('h1');
document.body.appendChild(titulo);
titulo.textContent = "Los dados de la suerte! Juega y Gana!";
titulo.style.textAlign = "center";
titulo.style.margin = "10px";
titulo.style.padding = "10 px";
for (var index = 0; index < numDados; index++) {
    elementSets.push({
        'div': document.createElement('div'),
    });
}
elementSets.map(function (elem, index) {
    rollDiceClassArray[index] = new dice_js_1.rollDice(elem.div);
    rollDiceClassArray[index].setStyle(getRandomIntInclusive(0, 3));
});
document.body.appendChild(divButton);
document.body.appendChild(divH1);
button.textContent = "Roll Dice";
divButton.style.clear = "both";
button.onclick = function (e) {
    suma = 0;
    for (var index = 0; index < numDados; index++) {
        var dice = rollDiceClassArray[index];
        suma = dice.setText() + suma + 1;
    }
    h1.textContent = "Suma total: " + suma.toString() + " puntos.";
};
//# sourceMappingURL=diceRollingApp.js.map