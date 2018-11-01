
/// <reference path="diceNamespace.ts" />




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


let squareSizeNum: number;
squareSizeNum = 100;
let squareSize: string = `${ squareSizeNum }px`;

class Dice {
  div: Element;
  h1: Element;
  constructor(div: Element) {
    this.div = div;
    this.h1 = document.createElement('h1');
    this.div.appendChild(this.h1);
  }
}


export class rollDice extends Dice {
  static Values = Values;
  static Colours = Colours;
  constructor(div: Element) {
    super(div);
    styles.initialize(this.div, squareSize);
/*     (this.div as HTMLElement).style.width = squareSize;
    (this.div as HTMLElement).style.height = squareSize;
    (this.div as HTMLElement).style.lineHeight = "50px"; */
  }
  rollDie (value: number) : boolean {
    (this.div as HTMLElement).textContent = Values[value];
    return true;
  }
  setStyle(index: number) : void {
    document.body.appendChild(this.div);
    styles.style(this.div, Colours[index]);
/*     (this.div as HTMLElement).style.border = "Red solid 1px";
    (this.div as HTMLElement).style.margin = "2px";
    (this.div as HTMLElement).style.cssFloat = "left";
    //(this.div as HTMLElement).style.verticalAlign = "top";
    (this.div as HTMLElement).style.color = Colours[index]; */
  }
  setText() : number {
    let parcial: number = getRandomIntInclusive(0, 11);
/*     (this.h1 as HTMLElement).textContent = Values[parcial];
    (this.h1 as HTMLElement).style.textAlign = "center"; */
    styles.text(this.h1, Values[parcial]);
    return parcial;
  }
}

let getRandomIntInclusive: Function = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


