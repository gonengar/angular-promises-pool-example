angular.module('myApp').directive('tags', function (TagsCollection) {
    return {
        restrict: 'E',
        templateUrl: 'components/tags/tags.html',
        scope: true,
        link: function (scope) {
            scope.collection = TagsCollection.getCollection();
        }
    }
});

