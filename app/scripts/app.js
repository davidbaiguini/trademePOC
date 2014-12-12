'use strict';

angular.module('trademeApp', [
    'ngRoute',
    'view1Module',
    'view2Module'
])
    .config(['$routeProvider',
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

angular.module('view1Module', [])
    .controller('View1Ctrl', function () {

});

angular.module('view2Module', [])
    .controller('View2Ctrl', function () {

    });