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

//Declarations

import {Dice} from './diceMixin.js';



let numDados: number = 10;



let suma: number;


//Pulsador para jugar

let divButton: Element = document.createElement('div');
(divButton as HTMLElement).style.width = "300px";
(divButton as HTMLElement).style.height = "100px";
(divButton as HTMLElement).style.cssFloat = "left";
(divButton as HTMLElement).style.padding = "50px 50px 0 50px";


let divH1: Element = document.createElement('div');
(divH1 as HTMLElement).style.width = "350px";
(divH1 as HTMLElement).style.height = "100px";
(divH1 as HTMLElement).style.cssFloat = "left";
(divH1 as HTMLElement).style.padding = "50px 50px 0 50";
(divH1 as HTMLElement).style.lineHeight = "25px";

let button: Element = document.createElement('button');
(button as HTMLElement).style.width = "250px";
(button as HTMLElement).style.height = "50px";
(button as HTMLElement).style.borderRadius = "10px";
divButton.appendChild(button);

let h1: Element = document.createElement('h1');
(h1 as HTMLElement).style.color = "red";
(h1 as HTMLElement).style.textAlign = "center";
divH1.appendChild(h1);

let getRandomIntInclusive: Function = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

interface ElementSet {
  'div': Element
}

/* interface DiceSet {
  dice: rollDice
} */

let elementSets: Array<ElementSet> = [];
let rollDiceClassArray : Array<Dice> = [];





let titulo: Element = document.createElement('h1');
document.body.appendChild(titulo);
(titulo as HTMLElement).textContent = "Los dados de la suerte! Juega y Gana!";
(titulo as HTMLElement).style.textAlign = "center";
(titulo as HTMLElement).style.margin = "10px";
(titulo as HTMLElement).style.padding = "10 px";
for (let index: number = 0; index < numDados; index++) {
  elementSets.push({
    'div': document.createElement('div'),
  })
}

elementSets.map( (elem, index) => {
  rollDiceClassArray[index] = new Dice(elem.div);
  rollDiceClassArray[index].setStyle(getRandomIntInclusive(0, 3));
})

document.body.appendChild(divButton);
document.body.appendChild(divH1);
(button as HTMLElement).textContent = "Roll Dice";
(divButton as HTMLElement).style.clear = "both";
(button as HTMLElement).onclick = (e) => {
  suma = 0;
  for (let index:number = 0; index < numDados; index++) {
    let dice : Dice = rollDiceClassArray[index];
    suma = dice.setText() + suma + 1;
  }
  (h1 as HTMLElement).textContent = "Suma total: " + suma.toString() + " puntos.";
}
  


