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

            vm.$onInit = function () {
                taskService.getAllTasks().then(function (response) {
                    vm.tasks.push(angular.copy(response));
                });
            };

            vm.addTask = function (task) {
                console.log(task);
                var items = vm.tasks;
                console.log(items);
                var add = true;
                for(item of items){
                    if(item.name === task.name && item.category === task.category){
                        add = false;
                        break;
                    }
                }

                if(add){
                    vm.tasks.push(angular.copy(task));
                }
            }
        },
        templateUrl: 'templates/task.component.html'
    });
})();