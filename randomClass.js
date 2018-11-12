"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Random {
    constructor(min, max) {
        this.randomNumbers = [];
        this.quantity = 50;
        this.API = "5608a661-6f7d-4e9a-8483-f9aa397a20c8";
        this.urlRandom = "https://api.random.org/json-rpc/1/invoke";
        this.apiMethod = "generateIntegers";
        this.fullFilledPromise = false;
        this.max = max;
        this.min = min;
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
        let myBody = {
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
                this.randomNumbers = response.result.random.data;
                this.fullFilledPromise = true;
                resolve(this.fullFilledPromise);
                console.log('Array: ', this.randomNumbers);
                //return response.result.random.data;
            });
        });
    }
}
exports.Random = Random;
//# sourceMappingURL=randomClass.js.map