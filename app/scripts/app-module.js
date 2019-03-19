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
})();