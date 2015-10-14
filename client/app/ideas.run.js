(function() {
  'use strict';

  angular
    .module('app')
    .run(runBlock);

  function runBlock($state, $rootScope) {

    $rootScope.$on('$stateChangeError',function(e,a,b,c,d, error){
      if(error === 'AUTH_REQUIRED'){
        $state.go('ideas')
      }

    })
  }

})();
