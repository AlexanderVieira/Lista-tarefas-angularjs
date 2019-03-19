(function () {

    angular.module('taskApp')
        .factory('categoryService', ['$http', '$q', '$log', categoryService]);

    function categoryService($http, $q, $log) {

        return {
            getAllCategories: getAllCategories
        };

        function getAllCategories() {
            return $http.get('data/categories.json')
                .then(function(response) {
                    return response.data;
                    console.log(response.data);
                })
                .catch(function(response) {
                    $log.error('Error retrieving tasks: ' + response.statusText);
                    return $q.reject('Error retrieving tasks.');
                })
        }

    }

}());