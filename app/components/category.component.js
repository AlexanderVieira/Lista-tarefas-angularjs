(function () {
    'use strict';

    angular.module('taskApp').component('category', {
        bindings:{
            name: '<',
            addCategory: '&'
        },
        controllerAs: 'vm',
        controller: function (categoryService) {

            var vm = this;
            vm.categories = [];
            vm.category = {
                name: ''
            };

            vm.$onInit = function () {
                categoryService.getAllCategories().then(function (response) {
                    vm.categories = response;
                });

                vm.addCategory = function (category) {
                    var list = vm.categories;
                    categoryService.addCategory(category, list);
                };

                vm.deleteCategory = function(category){
                    var list = vm.categories;
                    categoryService.deleteCategory(category, list);
                }
            };
        },
        templateUrl: 'templates/category.component.html'
    });
})();