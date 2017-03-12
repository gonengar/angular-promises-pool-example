angular.module('myApp').service('RequestPoolService', function ($http, RequestConstant) {
    class RequestPoolService {
        constructor() {
            this._availableSlotsIndexes = RequestConstant.maxConcurrentRequests;
            this._requestsQueue = [];
        }

        isAvailableSlots() {
            return this._availableSlotsIndexes > 0;
        }

        increaseSlots() {
            this._availableSlotsIndexes++;
        }

        decreaseSlots() {
            this._availableSlotsIndexes--;
        }

        handleAvailableSlot(requestObject) {
            this.decreaseSlots();
            this.request(requestObject)
                .then(() => {
                    this.increaseSlots();
                    this.handleOtherRequest()
                })
        }

        handleOtherRequest() {
            const requestObject = this._requestsQueue.pop();
            angular.isDefined(requestObject) ? this.handleAvailableSlot(requestObject) : null;
        }

        get(url) {
            let resolveFn;

            let promise = new Promise((resolve, reject) => {
                resolveFn = resolve;
            });

            const requestObject = {url: url, resolveFn: resolveFn};

            this.isAvailableSlots() ?
                this.handleAvailableSlot(requestObject)
                : this._requestsQueue.unshift(requestObject);


            return promise;
        }

        request(requestObject) {
            return $http.get(requestObject.url).then((result) => requestObject.resolveFn(result));
        }
    }

    return new RequestPoolService();
});