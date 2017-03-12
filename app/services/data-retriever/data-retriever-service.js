angular.module('myApp').service('DataRetrieverService', function ($http, RequestPoolService) {
    class DataRetriverService {
        constructor() {
            this._url = 'http://localhost:3000/letter';
        }

        addData(data, word) {
            const result = data.get(word);
            result ? data.set(word, result + 1) : data.set(word, 1);
        }

        handleResponse(resultsArray, resolveFn) {
            let data = new Map();
            resultsArray.forEach((value) => this.addData(data, value.data));
            resolveFn(this.transformToArray(data));
        }

        getData(numOfTimes) {
            let resolveFn;
            let promisesArray = [];
            let dummyPromise = new Promise((resolve, reject) => {
                resolveFn = resolve
            });

            for (let i = 0; i < numOfTimes; i++) {
                promisesArray.push(RequestPoolService.get(this._url));
            }

            Promise.all(promisesArray).then((resultsArray) => this.handleResponse(resultsArray, resolveFn));

            return dummyPromise;
        }

        transformToArray(data) {
            let arr = [];
            data.forEach((value, key) => {
                arr.push({word: key, numOfTimes: value});
            });

            return arr;
        }
    }

    return new DataRetriverService();
});