(function () {
    'use strict';

    angular.module('taskApp').component('category', {
        controllerAs: 'vm',
        controller: function (categoryService) {

            var vm = this;
            vm.categories = [];

            vm.$onInit = function () {
                categoryService.getAllCategories().then(function (response) {
                    vm.categories.push(angular.copy(response));
                    console.log(vm.categories);
                });
            }
        },
        templateUrl: 'templates/category.component.html'
    });
})();