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
                    console.log(vm.task);
                    var items = vm.tasks;
                    console.log(items);
                    var add = true;
                    for(let item of items){
                        if(item.name === vm.task.name && item.category === vm.task.category){
                            add = false;
                            break;
                        }
                    }

                    if(add){
                        vm.tasks.push(angular.copy(vm.task));
                    }
                }
            };
        },
        templateUrl: 'templates/task.component.html'
    });
})();