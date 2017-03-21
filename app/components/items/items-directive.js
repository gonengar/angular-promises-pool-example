angular.module('myApp').directive('items', function (ItemsCollection, HighlightWordService) {
    return {
        restrict: 'E',
        templateUrl: 'components/items/items.html',
        scope:true,
        link: function (scope) {
            scope.collection = ItemsCollection.getCollection();
            scope.isHighlighted = (name) => {
                let isHighlighted = false;
                name.split(' ').forEach((word) => {
                    isHighlighted = isHighlighted || HighlightWordService.isHighlighted(word);
                });
                return isHighlighted;
            }
        }
    }
});

