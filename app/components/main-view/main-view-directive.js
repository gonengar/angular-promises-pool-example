angular.module('myApp').directive('mainView', function(CollectionsFilterService){
    return {
        restrict: 'E',
        templateUrl: 'components/main-view/main-view.html',
        link: function(scope){
            scope.search = function(){
                CollectionsFilterService.filter(scope.searchString);
            }
        }
    }
});