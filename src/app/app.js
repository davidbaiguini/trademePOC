'use strict';

angular.module('trademeApp', [
    'ngRoute',
    'homepage',
    'page2',
    'header'
]);

angular.module('trademeApp').config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/homepage/homepage.html',
                controller: 'HomepageCtrl'
            })
            .when('/page2', {
                templateUrl: 'app/page2/page2.html',
                controller: 'Page2Ctrl'
            })
            .otherwise({
                redirectTo: '/404'
            });
}]);