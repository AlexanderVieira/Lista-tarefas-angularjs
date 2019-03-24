(function () {
    'use strict';

    angular.module('taskApp').component('task', {
        bindings:{
            name: '<',
            category: '<',
            done: '<',
            addTask: '&'
        },
        controllerAs: 'vm',
        controller: function (taskService) {

            var vm = this;
            vm.tasks = [];
            vm.task = {
                name: '',
                category: '',
                done: false,
            };

            vm.$onInit = function () {
                taskService.getAllTasks().then(function (response) {
                    vm.tasks = response;
                });

                vm.addTask = function (task) {
                    var list = vm.tasks;
                    taskService.addTask(task, list);
                };

                vm.deleteTask = function (task) {
                    console.log(task);
                    var list = vm.tasks;
                    taskService.deleteTask(task, list);
                }
            };
        },
        templateUrl: 'templates/task.component.html'
    });
})();