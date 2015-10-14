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
      })
      .state('opionion', {
        url: '/opinion/:ideaId',
        templateUrl: 'client/opinion/opinion.ng.html',
        controller: 'OpinionController as opinion',
        resolve: {
          "currentUser": ["$meteor", function($meteor){
            return $meteor.requireUser();
          }]
        }
      });

    $urlRouterProvider.otherwise("/ideas");
  }

})();
