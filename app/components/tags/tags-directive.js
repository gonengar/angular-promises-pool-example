angular.module('myApp').directive('tags', function (TagsCollection) {
    return {
        restrict: 'E',
        templateUrl: 'components/tags/tags.html',
        link: function (scope) {
            scope.collection = TagsCollection.getCollection();
        }
    }
});

