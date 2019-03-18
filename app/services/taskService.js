// (function () {
//
//     angular.module('taskApp', [])
//         .factory('taskService', ['$http', '$q', '$log', taskService]);
//
//     function taskService($http, $q, $log) {
//
//         return {
//             getAllTasks: getAllTasks,
//             getAllCategories: getAllCategories
//         };
//
//         function getAllTasks() {
//             return $http.get('data/tasks.json')
//                 .then(function(response) {
//                     return response.data;
//                 })
//                 .catch(function(response) {
//                     $log.error('Error retrieving tasks: ' + response.statusText);
//                     return $q.reject('Error retrieving tasks.');
//                 })
//         }
//
//         function getAllCategories() {
//             return $http.get('data/categories.json')
//                 .then(function(response) {
//                     return response.data;
//                 })
//                 .catch(function(response) {
//                     $log.error('Error retrieving categories: ' + response.statusText);
//                     return $q.reject('Error retrieving categories.');
//                 })
//         }
//
//     }
//
// }());

(function () {
    'use strict';

    angular.module('taskApp').factory('taskService', function ($http) {

        var self = this;

        self.getAllTasks = function () {
            return $http.get('data/tasks.json')
                .then(function (result) {
                    return result.data;
                });
        };

        self.getAllCategories = function () {
            return $http.get('data/categories.json')
                .then(function (result) {
                    return result.data;
                });
        };

        return this;
    });
})();