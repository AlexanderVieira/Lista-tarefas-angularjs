(function () {
    'use strict';

    angular.module('taskApp').component('home', {
        controllerAs: 'vm',
        controller: function (taskService) {

            var vm = this;
            vm.tasks = [];

            vm.$onInit = function () {
                taskService.getAllTasks().then(function (response) {
                    vm.tasks.push(angular.copy(response));
                });
            }
        },
        templateUrl: 'templates/home.component.html'
    });
})();
