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

                vm.addCategory = function (name) {
                    console.log(name);
                    console.log(categoryService);
                    categoryService.addCategory(name);

                    /*var items = vm.categories;
                    var add = true;
                    for(let item of items){
                        if(item.name === vm.category.name){
                            add = false;
                            break;
                        }
                    }

                    if(add){
                        vm.categories.push(angular.copy(vm.category));
                    }*/
                }
            };


        },
        templateUrl: 'templates/category.component.html'
    });
})();