"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const decoratorNumbers_js_1 = require("./decoratorNumbers.js");
let Random = class Random {
    constructor(min, max) {
        this.randomNumbers = [];
        this.randomDecNumbers = [];
        this.quantity = 50;
        // private API: string = "5608a661-6f7d-4e9a-8483-f9aa397a20c8";
        this.API = "00000000-0000-0000-0000-000000000000";
        this.urlRandom = "https://api.random.org/json-rpc/1/invoke";
        this.fullFilledPromise = false;
        this.max = max;
        this.min = min;
        if (this.dec) {
            this.apiMethod = "generateDecimalFractions";
        }
        if (this.num) {
            this.apiMethod = "generateIntegers";
        }
        console.log(this.apiMethod);
        //this.fetchRandomNumber(this.quantity, this.max, this.min);
    }
    giveMeNumber() {
        return new Promise((resolve, reject) => {
            let tempNum = this.randomNumbers.pop();
            if (this.randomNumbers.length === 0) {
                this.renewNumbers()
                    .then(response => {
                    resolve(tempNum);
                });
            }
            resolve(tempNum);
        });
    }
    /*   isFullFilledPromise(): boolean {
        return this.fullFilledPromise;
      } */
    renewNumbers() {
        return new Promise((resolve, reject) => {
            resolve(this.fetchRandomNumber());
        });
    }
    fetchRandomNumber() {
        let myHeaders = new Headers({
            "Content-Type": "application/json-rpc"
        });
        let myBody;
        if (this.apiMethod === "generateIntegers") {
            myBody = {
                jsonrpc: 2.0,
                method: this.apiMethod,
                params: {
                    apiKey: this.API,
                    n: this.quantity,
                    min: this.min,
                    max: this.max,
                    replacement: 'true',
                    base: 10
                },
                id: 345
            };
        }
        else {
            myBody = {
                jsonrpc: 2.0,
                method: this.apiMethod,
                params: {
                    apiKey: this.API,
                    n: this.quantity,
                    decimalPlaces: this.max,
                    replacement: 'true'
                },
                id: 346
            };
        }
        let myInit = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(myBody)
        };
        this.fullFilledPromise = false;
        return new Promise((resolve, reject) => {
            fetch(this.urlRandom, myInit)
                .then(response => {
                let resp = response.json();
                return resp;
            })
                .then(response => {
                if (this.apiMethod === "generateIntegers") {
                    console.log(response);
                    this.randomNumbers = response.result.random.data;
                    //return this.randomNumbers;
                    console.log('Array generateIntegers: ', this.randomNumbers);
                    //return response.result.random.data;
                }
                else {
                    console.log(response);
                    this.randomNumbers = response.result.random.data.map((e) => {
                        return Math.floor(e * this.max);
                    });
                    /*           this.randomDecNumbers = response.result.random.data;
                              console.log('decimal');
                              return this.randomDecNumbers; */
                }
                ;
                this.fullFilledPromise = true;
                resolve(this.fullFilledPromise);
                console.log('Array: ', this.randomNumbers);
            });
            /*       .then(response => {
                    if (this.apiMethod === "generateDecimalFractions") {
                      this.randomNumbers = response.map((e) => {
                        return Math.floor(e * this.max);
                      });
                    }
                    this.fullFilledPromise = true;
                    resolve(this.fullFilledPromise);
                    console.log('Array: ', this.randomNumbers);
                    //return response.result.random.data;
                  }) */
        });
    }
};
Random = __decorate([
    decoratorNumbers_js_1.Number
], Random);
exports.Random = Random;
//# sourceMappingURL=randomClass.js.map