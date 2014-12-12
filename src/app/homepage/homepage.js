'use strict';

angular.module('homepage', []);
angular.module('homepage').controller('HomepageCtrl', ['trademeAPIService',
    function (trademeAPIService) {
        var categoriesStore = this;

        trademeAPIService.getCategoriesList().success(function (data) {
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

