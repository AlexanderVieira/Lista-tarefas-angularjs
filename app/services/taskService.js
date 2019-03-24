(function () {

    angular.module('taskApp')
        .factory('taskService', ['$http', '$q', '$log', taskService]);

    function taskService($http, $q, $log) {

        var key = "tasks";
        let t = localStorage.getItem(key);
        if (t != null) {
            this.tasks = angular.fromJson(t);
        }

        return {
            getAllTasks: getAllTasks,
            addTask: addTask,
            deleteTask: deleteTask
        };

        function getAllTasks() {
            var deferred = $q.defer();
            return $http.get('data/tasks.json')
                .then(function(response) {
                    let tasks =  response.data;
                    deferred.resolve(tasks);
                    return deferred.promise;
                })
                .catch(function(response) {
                    $log.error('Error retrieving tasks: ' + response.statusText);
                    return $q.reject('Error retrieving tasks.');
                })
        }

        function addTask(task, list) {

            var add = true;
            for (let item of list) {

                if (item.name === task.name && item.category === task.category) {
                    add = false;
                    break;
                }
            }
            if (add) {
                list.push(task);
            }
            localStorage.setItem(key, angular.toJson(list));
        }

        function deleteTask(task, list) {

            /*let myTask = task;
            console.log(myTask);*/

            var index = list.indexOf(task);
            if (index != -1) {
                list.splice(index, 1)
            }
            localStorage.setItem(key, angular.toJson(list));

            /*for (var i = list.length - 1; i >= 0; i--) {

                if (list[i].name === task.name && list[i].category === task.category) {
                    list.splice(i, 1);
                    break;
                }
            }
            localStorage.setItem(key, angular.toJson(list));*/

            /*angular.forEach(list, function (task, index) {
                console.log(task);
                if (task === myTask){
                    list.splice(index, 1);
                }
            });
            localStorage.setItem(key, angular.toJson(list));*/
        }
    }

}());
