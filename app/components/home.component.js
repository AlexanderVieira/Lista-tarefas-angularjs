(function () {
    'use strict';

    angular.module('taskApp').component('home', {
        controllerAs: 'vm',
        controller: function (taskService, $location) {

            var vm = this;
            vm.tasks = [];

            vm.$onInit = function () {
                taskService.getAllTasks().then(function (response) {
                    vm.tasks = response;
                });

                vm.redirectTasks = function(){

                    $location.path("tasks");
                }

                vm.redirectCategories = function(){

                    $location.path("categories");
                }
            };
        },
        templateUrl: 'templates/home.component.html'
    });
})();