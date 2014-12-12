'use strict';

var trademeApp = angular.module('trademeApp', [
    'ngRoute',
    'view1Module',
    'view2Module'
]);

trademeApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
            .when('/view1', {
                templateUrl: 'views/view1.html',
                controller: 'View1Ctrl'
            })
            .when('/view2', {
                templateUrl: 'views/view2.html',
                controller: 'View2Ctrl'
            })
            .otherwise({
                redirectTo: '/view1'
            });
}]);

var view1Module = angular.module('view1Module', []);
view1Module.controller('View1Ctrl', function () {});

var view2Module = angular.module('view2Module', []);
view2Module.controller('View2Ctrl', ['trademeAPIService', function (trademeAPIService) {
        var categoriesStore = this;
        trademeAPIService.getCategoriesList().success(function(data) {
            //debugger;
            categoriesStore.categories = data.Subcategories;
        });
    }]);

view2Module.factory('trademeAPIService', ['$http',
    function ($http) {
        var trademeAPIService = {};

        trademeAPIService.getCategoriesList = function () {
            return $http.get('https://api.trademe.co.nz/v1/Categories.json');
        };

        return trademeAPIService;
}]);