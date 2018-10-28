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
//Declarations
var squareSizeNum;
squareSizeNum = 100;
var numDados = 10;
var squareSize = squareSizeNum + "px";
var suma;
//Pulsador para jugar
var divButton = document.createElement('div');
divButton.style.width = "300px";
divButton.style.height = "100px";
divButton.style.cssFloat = "left";
divButton.style.padding = "50px 50px 0 50px";
var divH1 = document.createElement('div');
divH1.style.width = "350px";
divH1.style.height = "100px";
divH1.style.cssFloat = "left";
divH1.style.padding = "50px 50px 0 50";
divH1.style.lineHeight = "25px";
var button = document.createElement('button');
button.style.width = "250px";
button.style.height = "50px";
button.style.borderRadius = "10px";
divButton.appendChild(button);
var h1 = document.createElement('h1');
h1.style.color = "red";
h1.style.textAlign = "center";
divH1.appendChild(h1);
var getRandomIntInclusive = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
/* interface DiceSet {
  dice: rollDice
} */
var elementSets = [];
var rollDiceClassArray = [];
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
var Dice = /** @class */ (function () {
    function Dice(div) {
        this.div = div;
        this.h1 = document.createElement('h1');
        this.div.appendChild(this.h1);
    }
    return Dice;
}());
var rollDice = /** @class */ (function (_super) {
    __extends(rollDice, _super);
    function rollDice(div) {
        var _this = _super.call(this, div) || this;
        _this.div.style.width = squareSize;
        _this.div.style.height = squareSize;
        _this.div.style.lineHeight = "50px";
        return _this;
    }
    rollDice.prototype.rollDie = function (value) {
        this.div.textContent = Values[value];
        return true;
    };
    rollDice.prototype.setStyle = function (index) {
        document.body.appendChild(this.div);
        this.div.style.border = "Red solid 1px";
        this.div.style.margin = "2px";
        this.div.style.cssFloat = "left";
        //(this.div as HTMLElement).style.verticalAlign = "top";
        this.div.style.color = Colours[index];
    };
    rollDice.prototype.setText = function () {
        var parcial = getRandomIntInclusive(0, 11);
        this.h1.textContent = Values[parcial];
        this.h1.style.textAlign = "center";
        suma += parcial + 1;
    };
    rollDice.Values = Values;
    rollDice.Colours = Colours;
    return rollDice;
}(Dice));
var titulo = document.createElement('h1');
document.body.appendChild(this.titulo);
titulo.textContent = "Los dados de la suerte! Juega y Gana!";
titulo.style.textAlign = "center";
titulo.style.margin = "10px";
titulo.style.padding = "10 px";
for (var index = 0; index < numDados; index++) {
    elementSets.push({
        'div': document.createElement('div')
    });
}
elementSets.map(function (elem, index) {
    rollDiceClassArray[index] = new rollDice(elem.div);
    rollDiceClassArray[index].setStyle(getRandomIntInclusive(0, 3));
});
document.body.appendChild(divButton);
document.body.appendChild(divH1);
button.textContent = "Roll Dice";
divButton.style.clear = "both";
button.onclick = function (e) {
    suma = 0;
    for (var index = 0; index < numDados; index++) {
        var dice = rollDiceClassArray[index];
        dice.setText();
    }
    h1.textContent = "Suma total: " + suma.toString() + " puntos.";
};
