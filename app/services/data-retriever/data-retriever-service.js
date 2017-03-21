angular.module('myApp').service('DataRetrieverService', function ($http) {
    class DataRetriverService {
        getData(url , searchString){
            return $http.get(url, {params: {
                queryString: searchString
            }});
        }
    }

    return new DataRetriverService();
});