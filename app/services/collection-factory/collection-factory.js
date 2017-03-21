angular.module('myApp').factory('Collection', function(DataRetrieverService, urls){
    class Collection{
        constructor(collectionType, dataExtractor){
            this._url = urls[collectionType];
            this.data = [];
            this.listeners = [];
            this._dataExtractor = dataExtractor;
        }

        filter(searchString){
            return DataRetrieverService.getData(this._url, searchString).then((data)=>{
                this.data.splice(0, this.data.length);
                this.data.push(...this._dataExtractor(data));
                this.listeners.forEach((listener)=>listener(this.data));
                return data;
            });
        }

        getCollection(){
            return this.data;
        }

        onUpdate(cb){
            this.listeners.push(cb);
        }
    }

    return Collection;
});