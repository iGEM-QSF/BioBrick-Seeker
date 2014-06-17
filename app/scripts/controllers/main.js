'use strict';

angular.module('iGemPlates2014App')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('allkitplates.json').success( function(data, status, headers, config) {
        console.log(data)
        $scope.entries = data;
    });
  });

angular.module('iGemPlates2014App').filter('unsafe', function($sce) {
    return function(val) {
        return $sce.trustAsHtml(val);
    };
});
