"use strict";
/// <reference path="diceNamespace.ts" />
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var squareSizeNum;
squareSizeNum = 100;
var squareSize = squareSizeNum + "px";
var Dice = /** @class */ (function () {
    function Dice(div) {
        this.div = div;
        this.h1 = document.createElement('h1');
        this.div.appendChild(this.h1);
    }
    Dice.prototype.rollDie = function (value) {
        this.div.textContent = Values[value];
        return true;
    };
    return Dice;
}());
var rollDice = /** @class */ (function (_super) {
    __extends(rollDice, _super);
    function rollDice(div) {
        var _this = _super.call(this, div) || this;
        styles.initialize(_this.div, squareSize);
        return _this;
        /*     (this.div as HTMLElement).style.width = squareSize;
            (this.div as HTMLElement).style.height = squareSize;
            (this.div as HTMLElement).style.lineHeight = "50px"; */
    }
    rollDice.prototype.setStyle = function (index) {
        document.body.appendChild(this.div);
        styles.style(this.div, Colours[index]);
        /*     (this.div as HTMLElement).style.border = "Red solid 1px";
            (this.div as HTMLElement).style.margin = "2px";
            (this.div as HTMLElement).style.cssFloat = "left";
            //(this.div as HTMLElement).style.verticalAlign = "top";
            (this.div as HTMLElement).style.color = Colours[index]; */
    };
    rollDice.prototype.setText = function () {
        var parcial = getRandomIntInclusive(0, 11);
        /*     (this.h1 as HTMLElement).textContent = Values[parcial];
            (this.h1 as HTMLElement).style.textAlign = "center"; */
        styles.text(this.h1, Values[parcial]);
        return parcial;
    };
    rollDice.Values = Values;
    rollDice.Colours = Colours;
    return rollDice;
}(Dice));
exports.rollDice = rollDice;
var getRandomIntInclusive = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
//# sourceMappingURL=dice.js.map