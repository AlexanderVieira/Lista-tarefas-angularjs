/*
(function () {
    'use strict';

    var appModule = angular.module('taskApp', ['ui.router']);

    //appModule.value('apiBase', 'http://localhost:9838/api/courseviewer/');

    appModule.config(function ($stateProvider, $urlRouterProvider) {
        var states = [
            {
                name: 'home',
                url: '/',
                templateUrl: 'templates/home.component.html'
            },
            {
                name: 'tarefas',
                url: '/tarefas',
                templateUrl: 'templates/task.component.html'
            },
            {
                name: 'categorias',
                url: '/categorias',
                templateUrl: 'templates/category.component.html'
            },
            {
                name: 'tarefa',
                url: '/tarefa/{Id}',
                resolve: {
                    Id: function ($stateParams) {
                        return $stateParams.Id;
                    }
                },
                template: '<tarefa tarefa-id="$resolve.Id"></tarefa>'
            },
            {
                name: 'categoria',
                url: '/categoria/{Id}',
                resolve: {
                    Id: function ($stateParams) {
                        return $stateParams.Id;
                    }
                },
                template: '<categoria categoria-id="$resolve.Id"></categoria>'
            },

        ];

        $urlRouterProvider.otherwise('/');

        states.forEach(function (state) {
            $stateProvider.state(state);
        });
    });
})();*/

(function () {
    'use strict';
    var appModule = angular.module('taskApp', ['ngRoute']);

    appModule.controller('mainCtrl', function ($scope, $routeParams) {

        $scope.homeTitle = "Listagem por tarefas realizadas";
        $scope.taskTitle = "Lista de tarefas";
        $scope.addTaskTitle = "Adicionar tarefas";
        $scope.categoryTitle = "Lista de categorias";
        $scope.addCategoryTitle = "Adicionar categoria";

    });

    appModule.config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when("/", {
                template: "<home></home>",
            })
            .when("/tasks", {
                template: "<task></task>",
            })
            .when("/categories", {
                template: "<category></category>",
            });
    });
})();
