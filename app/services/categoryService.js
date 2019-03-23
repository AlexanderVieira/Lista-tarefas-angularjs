(function () {

    angular.module('taskApp')
        .factory('categoryService', ['$http', '$q', '$log', categoryService]);

    function categoryService($http, $q, $log) {

        var categories = [];
        var category = {};

        return {
            getAllCategories: getAllCategories,
            addCategory: addCategory
        };

        function getAllCategories() {

            return $http.get('data/categories.json')
                .then(function(response) {
                    return categories = response.data;
                })
                .catch(function(response) {
                    $log.error('Error retrieving tasks: ' + response.statusText);
                    return $q.reject('Error retrieving tasks.');
                })
        }

        function addCategory(name) {

            // var items = vm.categories;
                    var add = true;
                    for(let item of categories){
                        if(item.name === name){
                            add = false;
                            break;
                        }
                    }

                    if(add){
                        categories.push(angular.copy(category.name = name));
                    }
        }

    }

}());