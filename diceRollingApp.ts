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
generate a different value from the enum for each individual die when the "Roll Dice" button is pressed. */

//Declarations

let squareSizeNum: number;
squareSizeNum = 100;

let numDados: number = 10;

let squareSize: string = `${ squareSizeNum }px`;

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
let rollDiceClassArray : Array<rollDice> = [];

enum Values {
  Uno,
  Dos,
  Tres,
  Cuatro,
  Cinco,
  Seis,
  Siete,
  Ocho,
  Nueve,
  Diez,
  Once,
  Doce
}

enum Colours {
  red,
  black,
  blue,
  maroon
}

class Dice {
  div: Element;
  h1: Element;
  constructor(div: Element) {
    this.div = div;
    this.h1 = document.createElement('h1');
    this.div.appendChild(this.h1);
  }
}

class rollDice extends Dice {
  static Values = Values;
  static Colours = Colours;
  constructor(div: Element) {
    super(div);
    (this.div as HTMLElement).style.width = squareSize;
    (this.div as HTMLElement).style.height = squareSize;
    (this.div as HTMLElement).style.lineHeight = "50px";
  }
  rollDie (value: number) : boolean {
    (this.div as HTMLElement).textContent = Values[value];
    return true;
  }
  setStyle(index: number) : void {
    document.body.appendChild(this.div);
    (this.div as HTMLElement).style.border = "Red solid 1px";
    (this.div as HTMLElement).style.margin = "2px";
    (this.div as HTMLElement).style.cssFloat = "left";
    //(this.div as HTMLElement).style.verticalAlign = "top";
    (this.div as HTMLElement).style.color = Colours[index];
  }
  setText() : void {
    let parcial: number = getRandomIntInclusive(0, 11);
    (this.h1 as HTMLElement).textContent = Values[parcial];
    (this.h1 as HTMLElement).style.textAlign = "center";
    suma += parcial + 1;
  }
}
let titulo: Element = document.createElement('h1');
document.body.appendChild(this.titulo);
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
  rollDiceClassArray[index] = new rollDice(elem.div);
  rollDiceClassArray[index].setStyle(getRandomIntInclusive(0, 3));
})

document.body.appendChild(divButton);
document.body.appendChild(divH1);
(button as HTMLElement).textContent = "Roll Dice";
(divButton as HTMLElement).style.clear = "both";
(button as HTMLElement).onclick = (e) => {
  suma = 0;
  for (let index:number = 0; index < numDados; index++) {
    let dice : rollDice = rollDiceClassArray[index];
    dice.setText();
  }
  (h1 as HTMLElement).textContent = "Suma total: " + suma.toString() + " puntos.";
}
  


