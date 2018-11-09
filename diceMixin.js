"use strict";
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
var classDice = /** @class */ (function () {
    function classDice() {
    }
    classDice.prototype.rollDie = function (value) {
        this.div.textContent = Values[value];
        return true;
    };
    classDice.Values = Values;
    classDice.Colours = Colours;
    return classDice;
}());
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
var getRandomIntInclusive = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
var styles = /** @class */ (function () {
    function styles() {
    }
    styles.prototype.text = function (h1, val) {
        h1.textContent = val;
        h1.style.textAlign = "center";
    };
    styles.prototype.style = function (div, color) {
        div.style.border = "Red solid 1px";
        div.style.margin = "2px";
        div.style.cssFloat = "left";
        //(this.div as HTMLElement).style.verticalAlign = "top";
        div.style.color = color;
    };
    styles.prototype.initialize = function (div, sqsz) {
        div.style.width = sqsz;
        div.style.height = sqsz;
        div.style.lineHeight = "50px";
    };
    styles.prototype.setStyle = function (index) {
        document.body.appendChild(this.div);
        this.style(this.div, Colours[index]);
        /*     (this.div as HTMLElement).style.border = "Red solid 1px";
            (this.div as HTMLElement).style.margin = "2px";
            (this.div as HTMLElement).style.cssFloat = "left";
            //(this.div as HTMLElement).style.verticalAlign = "top";
            (this.div as HTMLElement).style.color = Colours[index]; */
    };
    styles.prototype.setText = function () {
        var parcial = getRandomIntInclusive(0, 11);
        /*     (this.h1 as HTMLElement).textContent = Values[parcial];
            (this.h1 as HTMLElement).style.textAlign = "center"; */
        this.text(this.h1, Values[parcial]);
        return parcial;
    };
    styles.Values = Values;
    styles.Colours = Colours;
    return styles;
}());
applyMixins(Dice, [classDice, styles]);
function applyMixins(derivedClass, baseClass) {
    baseClass.forEach(function (base) {
        Object.getOwnPropertyNames(base.prototype).forEach(function (name) {
            derivedClass.prototype[name] = base.prototype[name];
        });
    });
}
//# sourceMappingURL=diceMixin.js.map