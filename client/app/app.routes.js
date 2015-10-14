(function() {
  'use strict';

  angular
    .module('app')
    .config(routeConfig);

  function routeConfig($stateProvider, $locationProvider, $urlRouterProvider) {

    $locationProvider.html5Mode(true);

    $stateProvider
      .state('ideas', {
        url: '/ideas',
        templateUrl: 'client/ideas/ideas.ng.html',
        controller: 'IdeasController as ideas'
      });

    $urlRouterProvider.otherwise("/ideas");
  }

})();
