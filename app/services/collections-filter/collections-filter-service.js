angular.module('myApp').service('CollectionsFilterService', function (ItemsCollection, TagsCollection) {
    class CollectionsFilterService {
        filter(searchText){
            ItemsCollection.filter(searchText);
            TagsCollection.filter(searchText);
        }
    }

    return new CollectionsFilterService();
});