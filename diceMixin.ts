
import * as dC from "./diceClasses.js"

let squareSizeNum: number;
squareSizeNum = 100;
let squareSize: string = `${ squareSizeNum }px`;

export class Dice implements dC.classDice, dC.styles {
  div: Element;
  h1: Element;
  rollDie: (value: number) => boolean;
  setStyle: (index: number) => void;
  setText: () => number;
  text: (h1: Element, vl: string) => void;
  style: (div: Element, color: string) => void;
  initialize: (div: Element, sqsz: string) => void;

  constructor(div: Element) {
    this.div = div;
    this.h1 = document.createElement('h1');
    this.div.appendChild(this.h1);
    this.initialize(this.div, squareSize);
  }
}

applyMixins(Dice, [dC.classDice, dC.styles]);

function applyMixins(derivedClass: any, baseClass: any[]) {
  baseClass.forEach(base => {
    Object.getOwnPropertyNames(base.prototype).forEach(name => {
      derivedClass.prototype[name] = base.prototype[name];
    });
  });
}

