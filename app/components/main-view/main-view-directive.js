angular.module('myApp').directive('mainView', function(DataRetrieverService, RequestConstant){
    return {
        restrict: 'E',
        templateUrl: 'components/main-view/main-view.html',
        link: function(scope, element, attributes){
            DataRetrieverService.getData(RequestConstant.numOfTimes).then((data)=>{
                scope.data = data;
                scope.$digest();
            })
        }
    }
});