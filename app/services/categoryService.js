(function () {
    'use strict';

    angular.module('taskApp')
        .factory('categoryService', ['$http', '$q', '$log', categoryService]);

    function categoryService($http, $q, $log) {

        var key = "categories";
        let c = localStorage.getItem(key);
        if (c != null) {
            this.categories = angular.fromJson(c);
        }

        // let categories = [];

        return {
            getAllCategories: getAllCategories,
            addCategory: addCategory,
            deleteCategory: deleteCategory
        };

        function getAllCategories() {
            var deferred = $q.defer();
            return $http.get('data/categories.json')
                .then(function (response) {
                    let categories = response.data;
                    deferred.resolve(categories);
                    return deferred.promise;
                })
                .catch(function (response) {
                    $log.error('Error retrieving categories: ' + response.statusText);
                    return $q.reject('Error retrieving categories.');
                })
        }

        function addCategory(category, list) {

            var add = true;
            for (let item of list) {

                if (item === category) {
                    add = false;
                    break;
                }
            }

            if (add) {
                list.push(category);
                console.log(list);
            }
            localStorage.setItem(key, angular.toJson(list));
        }

        function deleteCategory(category, list) {

            let myCategory = category;

            /*var index = list.indexOf(category);
            if (index != -1) {
                list.splice(index, 1)
            }*/

            angular.forEach(list, function (category, index) {
                if (category.name === myCategory){
                    list.splice(index, 1);
                }
            });
            localStorage.setItem(key, angular.toJson(list));

        }

    }

}());