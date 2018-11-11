"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dC = require("./diceClasses.js");
let squareSizeNum;
squareSizeNum = 100;
let squareSize = `${squareSizeNum}px`;
class Dice {
    constructor(div) {
        this.div = div;
        this.h1 = document.createElement('h1');
        this.div.appendChild(this.h1);
        this.initialize(this.div, squareSize);
    }
}
exports.Dice = Dice;
applyMixins(Dice, [dC.classDice, dC.styles]);
function applyMixins(derivedClass, baseClass) {
    baseClass.forEach(base => {
        Object.getOwnPropertyNames(base.prototype).forEach(name => {
            derivedClass.prototype[name] = base.prototype[name];
        });
    });
}
//# sourceMappingURL=diceMixin.js.map