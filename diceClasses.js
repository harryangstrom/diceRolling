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
    Colours[Colours["pink"] = 4] = "pink";
    Colours[Colours["green"] = 5] = "green";
    Colours[Colours["yellow"] = 6] = "yellow";
    Colours[Colours["orange"] = 7] = "orange";
    Colours[Colours["brown"] = 8] = "brown";
    Colours[Colours["aquamarine"] = 9] = "aquamarine";
    Colours[Colours["navy"] = 10] = "navy";
    Colours[Colours["silver"] = 11] = "silver";
})(Colours || (Colours = {}));
class genericClass {
    setVal(val) {
        this.val = val;
    }
    getVal() {
        return this.val;
    }
}
exports.genericClass = genericClass;
class classDice {
    rollDie(value) {
        this.div.textContent = Values[value];
        return true;
    }
}
classDice.Values = Values;
classDice.Colours = Colours;
exports.classDice = classDice;
let getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
class styles {
    text(h1, val) {
        h1.textContent = val;
        h1.style.textAlign = "center";
    }
    style(div, color) {
        div.style.border = "Red solid 1px";
        div.style.margin = "2px";
        div.style.cssFloat = "left";
        //(this.div as HTMLElement).style.verticalAlign = "top";
        div.style.color = color;
    }
    initialize(div, sqsz) {
        div.style.width = sqsz;
        div.style.height = sqsz;
        div.style.lineHeight = "50px";
    }
    setStyle(index) {
        document.body.appendChild(this.div);
        this.style(this.div, Colours[index]);
        /*     (this.div as HTMLElement).style.border = "Red solid 1px";
            (this.div as HTMLElement).style.margin = "2px";
            (this.div as HTMLElement).style.cssFloat = "left";
            //(this.div as HTMLElement).style.verticalAlign = "top";
            (this.div as HTMLElement).style.color = Colours[index]; */
    }
    setText(num) {
        let parcial = num;
        let actualNumbStr = this.h1.textContent;
        if (actualNumbStr === "") {
            this.text(this.h1, Values[0]);
            actualNumbStr = "Uno";
        }
        let actualNumber = Values[actualNumbStr];
        let parcialTemp = parcial + 12;
        let cont = actualNumber;
        let timer = setInterval(() => {
            this.text(this.h1, Values[cont % 12]);
            cont++;
            if (cont === parcialTemp + 1) {
                clearInterval(timer);
            }
        }, 150);
        console.log(parcial);
        return parcial;
    }
}
styles.Values = Values;
styles.Colours = Colours;
exports.styles = styles;
//# sourceMappingURL=diceClasses.js.map