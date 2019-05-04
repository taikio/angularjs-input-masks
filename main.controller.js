(function(){
    'use strict';

    angular.module('myApp', ['ngSanitize']);

    angular
    .module('myApp')
    .controller('MainController', mainController)

    mainController.$inject = ['$scope'];
    function mainController($scope) {
        var vm = this;

        vm.inputValue = 0;
    }

})();