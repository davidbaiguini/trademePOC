'use strict';

angular.module('header', []);

angular.module('header').directive('header', function () {
    return {
        restrict: 'E',
        templateUrl: 'app/header/header.html',
        controllerAs: 'HeaderCtrl',
        controller: function () {}
    };
});