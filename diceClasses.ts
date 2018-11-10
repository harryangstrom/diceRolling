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

export class classDice implements dado{
  div: Element;
  h1: Element;
  static Values = Values;
  static Colours = Colours;

  rollDie (value: number) : boolean {
    (this.div as HTMLElement).textContent = Values[value];
    return true;
  }
}

let getRandomIntInclusive: Function = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export class styles {
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
    let actualNumbStr: string = (this.h1 as HTMLElement).textContent;
    if (actualNumbStr === "") {
      this.text(this.h1, Values[0]);
      actualNumbStr = "Uno";
    }
    let actualNumber: number = Values[actualNumbStr];
    let parcialTemp: number = parcial + 12;
    let cont: number = actualNumber;
    let timer = setInterval(() => {
      this.text(this.h1, Values[cont%12]);
      cont++;
      if (cont === parcialTemp + 1) {
        clearInterval(timer);
      }
    }, 150);
    console.log(parcial);

    return parcial;
  }

}