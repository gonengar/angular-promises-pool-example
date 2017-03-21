angular.module('myApp').service('TagsCollection', function(Collection){
    const collectionName = 'tags';
    const dataExtractor = (data)=>data.data;
    return new Collection(collectionName, dataExtractor);
});