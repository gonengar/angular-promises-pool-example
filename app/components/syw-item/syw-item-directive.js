angular.module('myApp').directive('sywItem', function () {
    return {
        restrict: 'E',
        templateUrl: 'components/syw-item/syw-item.html',
        scope: {
            item: '='
        },
        link: function(scope, element, attrs){
        }
    }
});