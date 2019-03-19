(function () {

    angular.module('taskApp')
        .factory('taskService', ['$http', '$q', '$log', taskService]);

    function taskService($http, $q, $log) {

        return {
            getAllTasks: getAllTasks
        };

        function getAllTasks() {
            return $http.get('data/tasks.json')
                .then(function(response) {
                    return response.data;
                })
                .catch(function(response) {
                    $log.error('Error retrieving tasks: ' + response.statusText);
                    return $q.reject('Error retrieving tasks.');
                })
        }

    }

}());

/*(function () {
    'use strict';

    angular.module('taskApp').factory('taskService', function ($http) {

        var self = this;

        self.getAllTasks = function () {
            return $http.get('data/tasks.json')
                .then(function (result) {
                    return result.data;
                });
        };

        return this;
    });
})();*/

/*(function() {

    angular.module('taskApp')
        .factory('taskService', ['$q', '$timeout','$http', taskService]);

    function taskService($q, $http, $timeout) {

        return {
            getAllTasks: getAllTasks
        };

        function getAllTasks() {

            return $http.get('data/tasks.json')
                .then(function(response) {
                    var transformed = angular.fromJson(response.data);
                    transformed.forEach(function (currentValue, index, array) {
                        currentValue.dateDownloaded = new Date();
                    });
                    return transformed;
                })
                .catch(function(response) {
                    $log.error('Error retrieving tasks: ' + response.statusText);
                    return $q.reject('Error retrieving tasks.');
                })

            var deferred = $q.defer();


            $timeout(function () {

                var successful = true;
                if (successful) {

                    deferred.notify('Just getting started gathering books...');
                    deferred.notify('Almost done gathering books...');

                    deferred.resolve(tasks);

                } else {

                    deferred.reject('Error retrieving books.');

                }

            }, 1000);

            return deferred.promise;

        }

    }

}());*/

/*
(function() {

    angular.module('taskApp')
        .factory('taskService', ['$q', '$timeout', taskService]);


    function taskService($q, $timeout) {

        return {
            getAllTasks: getAllTasks
        };

        function getAllTasks() {

            var tasks = [
                {
                    taskId: 1,
                    name: 'Varrer o quarto',
                    category: 'Casa',
                    done: false
                },
                {
                    taskId: 2,
                    name: 'Lavar a louça',
                    category: 'Casa',
                    done: true
                },
                {
                    taskId: 3,
                    name: 'Lavar as roupas',
                    category: 'Casa',
                    done: false
                },
                {
                    taskId: 4,
                    name: 'Consertar a porta',
                    category: 'Casa',
                    done: false
                },
                {
                    taskId: 5,
                    name: 'Terminar o relatório',
                    category: 'Trabalho',
                    done: false
                },
                {
                    taskId: 6,
                    name: 'Estudar para a próxima reunião',
                    category: 'Trabalho',
                    done: false
                },
                {
                    taskId: 7,
                    name: 'Enviar email sobre o problema',
                    category: 'Trabalho',
                    done: false
                },
                {
                    taskId: 8,
                    name: 'Levar pó de café',
                    category: 'Trabalho',
                    done: true
                },
                {
                    taskId: 9,
                    name: 'Comprar canetas novas',
                    category: 'Trabalho',
                    done: true
                },
                {
                    taskId: 10,
                    name: 'Estudar Etapa 1',
                    category: 'Faculdade',
                    done: true
                },
                {
                    taskId: 11,
                    name: 'Estudar Etapa 2',
                    category: 'Faculdade',
                    done: true
                },
                {
                    taskId: 12,
                    name: 'Estudar Etapa 3',
                    category: 'Faculdade',
                    done: false
                },
                {
                    taskId: 13,
                    name: 'Fazer TP1',
                    category: 'Faculdade',
                    done: false
                }

            ];

            var deferred = $q.defer();


            $timeout(function () {

                var successful = true;
                if (successful) {

                    deferred.notify('Just getting started gathering books...');
                    deferred.notify('Almost done gathering books...');

                    deferred.resolve(tasks);

                } else {

                    deferred.reject('Error retrieving books.');

                }

            }, 1000);

            return deferred.promise;

        }
    }

}());*/
