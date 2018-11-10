"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dC = require("./diceClasses.js");
var squareSizeNum;
squareSizeNum = 100;
var squareSize = squareSizeNum + "px";
var Dice = /** @class */ (function () {
    function Dice(div) {
        this.div = div;
        this.h1 = document.createElement('h1');
        this.div.appendChild(this.h1);
        this.initialize(this.div, squareSize);
    }
    return Dice;
}());
exports.Dice = Dice;
applyMixins(Dice, [dC.classDice, dC.styles]);
function applyMixins(derivedClass, baseClass) {
    baseClass.forEach(function (base) {
        Object.getOwnPropertyNames(base.prototype).forEach(function (name) {
            derivedClass.prototype[name] = base.prototype[name];
        });
    });
}
//# sourceMappingURL=diceMixin.js.map