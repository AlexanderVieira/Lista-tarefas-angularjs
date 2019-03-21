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

            vm.$onInit = function () {
                categoryService.getAllCategories().then(function (response) {
                    vm.categories.push(angular.copy(response));
                    console.log(vm.categories);
                });
            };

            vm.addCategory = function (category) {
                console.log(category);
                var items = vm.categories;
                console.log(items);
                var add = true;
                for(item of items){
                    if(item.name === category.name){
                        add = false;
                        break;
                    }
                }

                if(add){
                    vm.categories.push(angular.copy(category));
                }
            }
        },
        templateUrl: 'templates/category.component.html'
    });
})();