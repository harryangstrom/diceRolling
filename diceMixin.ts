
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

interface dado {
  div: Element;
  h1: Element;
  rollDie(val: number) : boolean;
}

let squareSizeNum: number;
squareSizeNum = 100;
let squareSize: string = `${ squareSizeNum }px`;




class classDice implements dado{
  div: Element;
  h1: Element;
  static Values = Values;
  static Colours = Colours;

  rollDie (value: number) : boolean {
    (this.div as HTMLElement).textContent = Values[value];
    return true;
  }
}

export class Dice implements classDice, styles {
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



let getRandomIntInclusive: Function = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



class styles {
  div: Element;
  h1: Element;
  static Values = Values;
  static Colours = Colours;

  text(h1: Element, val: string): void {
    (h1 as HTMLElement).textContent = val;
    (h1 as HTMLElement).style.textAlign = "center";
  }

  style(div: Element, color:string): void {
    (div as HTMLElement).style.border = "Red solid 1px";
    (div as HTMLElement).style.margin = "2px";
    (div as HTMLElement).style.cssFloat = "left";
    //(this.div as HTMLElement).style.verticalAlign = "top";
    (div as HTMLElement).style.color = color;
  }

  initialize(div: Element, sqsz: string): void {
    (div as HTMLElement).style.width = sqsz;
    (div as HTMLElement).style.height = sqsz;
    (div as HTMLElement).style.lineHeight = "50px";
  }

  setStyle(index: number) : void {
    document.body.appendChild(this.div);
    this.style(this.div, Colours[index]);
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
    this.text(this.h1, Values[parcial]);
    return parcial;
  }

}

applyMixins(Dice, [classDice, styles]);

function applyMixins(derivedClass: any, baseClass: any[]) {
  baseClass.forEach(base => {
    Object.getOwnPropertyNames(base.prototype).forEach(name => {
      derivedClass.prototype[name] = base.prototype[name];
    });
  });
}

