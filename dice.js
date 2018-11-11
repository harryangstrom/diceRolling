"use strict";
/// <reference path="diceNamespace.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
var Values;
(function (Values) {
    Values[Values["Uno"] = 0] = "Uno";
    Values[Values["Dos"] = 1] = "Dos";
    Values[Values["Tres"] = 2] = "Tres";
    Values[Values["Cuatro"] = 3] = "Cuatro";
    Values[Values["Cinco"] = 4] = "Cinco";
    Values[Values["Seis"] = 5] = "Seis";
    Values[Values["Siete"] = 6] = "Siete";
    Values[Values["Ocho"] = 7] = "Ocho";
    Values[Values["Nueve"] = 8] = "Nueve";
    Values[Values["Diez"] = 9] = "Diez";
    Values[Values["Once"] = 10] = "Once";
    Values[Values["Doce"] = 11] = "Doce";
})(Values || (Values = {}));
var Colours;
(function (Colours) {
    Colours[Colours["red"] = 0] = "red";
    Colours[Colours["black"] = 1] = "black";
    Colours[Colours["blue"] = 2] = "blue";
    Colours[Colours["maroon"] = 3] = "maroon";
})(Colours || (Colours = {}));
let squareSizeNum;
squareSizeNum = 100;
let squareSize = `${squareSizeNum}px`;
class Dice {
    rollDie(value) {
        this.div.textContent = Values[value];
        return true;
    }
    constructor(div) {
        this.div = div;
        this.h1 = document.createElement('h1');
        this.div.appendChild(this.h1);
    }
}
class rollDice extends Dice {
    constructor(div) {
        super(div);
        styles.initialize(this.div, squareSize);
        /*     (this.div as HTMLElement).style.width = squareSize;
            (this.div as HTMLElement).style.height = squareSize;
            (this.div as HTMLElement).style.lineHeight = "50px"; */
    }
    setStyle(index) {
        document.body.appendChild(this.div);
        styles.style(this.div, Colours[index]);
        /*     (this.div as HTMLElement).style.border = "Red solid 1px";
            (this.div as HTMLElement).style.margin = "2px";
            (this.div as HTMLElement).style.cssFloat = "left";
            //(this.div as HTMLElement).style.verticalAlign = "top";
            (this.div as HTMLElement).style.color = Colours[index]; */
    }
    setText() {
        let parcial = getRandomIntInclusive(0, 11);
        /*     (this.h1 as HTMLElement).textContent = Values[parcial];
            (this.h1 as HTMLElement).style.textAlign = "center"; */
        styles.text(this.h1, Values[parcial]);
        return parcial;
    }
}
rollDice.Values = Values;
rollDice.Colours = Colours;
exports.rollDice = rollDice;
let getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
//# sourceMappingURL=dice.js.map