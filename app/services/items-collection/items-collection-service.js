angular.module('myApp').service('ItemsCollection', function(Collection){
    const collectionName = 'items';
    const dataExtractor = (data)=>data.data.products;
    return new Collection(collectionName, dataExtractor);
});