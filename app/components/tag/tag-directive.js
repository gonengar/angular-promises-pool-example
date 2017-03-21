angular.module('myApp').directive('tag', function () {
    return {
        restrict: 'E',
        templateUrl: 'components/tag/tag.html',
        scope: {
            tag: '='
        }
    }
});