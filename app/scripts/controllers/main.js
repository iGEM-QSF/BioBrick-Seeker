'use strict';

angular.module('iGemPlates2014App')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http.get('allkitplates.json').success( function(data, status, headers, config) {
        console.log(data)
        $scope.entries = data;
    });
  });
