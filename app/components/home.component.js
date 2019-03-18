(function () {
    'use strict';

    angular.module('taskApp').component('home', {
        controllerAs: 'vm',
        controller: function (taskService) {
            var vm = this;

            vm.tasks = null;

            vm.$onInit = function () {
                taskService.getAllTasks().then(function (tasks) {
                    vm.tasks = tasks;
                });
            }
        },
        templateUrl: 'templates/home.component.html'
    });
})();
