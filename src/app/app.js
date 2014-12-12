'use strict';

angular.module('trademeApp', [
    'ngRoute',
    'homepage',
    'page2'
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


/* Homepage */
angular.module('homepage', []);
angular.module('homepage').controller('HomepageCtrl', ['trademeAPIService', function (trademeAPIService) {
        var categoriesStore = this;
    
        trademeAPIService.getCategoriesList().success(function(data) {
            categoriesStore.categories = data.Subcategories;
        });
    }]);

angular.module('homepage').factory('trademeAPIService', ['$http',
    function ($http) {
        var trademeAPIService = {};
        
        trademeAPIService.getCategoriesList = function () {
            return $http.get('https://api.trademe.co.nz/v1/Categories.json');
        };
        
        return trademeAPIService;
}]);

/* Page 2 */
angular.module('page2', []);
angular.module('page2').controller('Page2Ctrl', function () {});

