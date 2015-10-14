
(function() {
    'use strict';
angular
    .module('app')
    .controller('IdeasController', IdeasController);

	function IdeasController($meteor, $scope, $rootScope) { 

		var vm = this;
		$meteor.subscribe('userData');


		vm.ideasList = $scope.$meteorCollection(Ideas);
		$meteor.subscribe('ideas');

		vm.createIdea = createIdea;
		vm.deleteIdea = deleteIdea;

		function createIdea(idea){
			idea.userId = $rootScope.currentUser._id;
			idea.userName = $rootScope.currentUser.profile.name;
			console.log(idea)
			vm.ideasList.push(idea);
		}

		function deleteIdea(idea){
			vm.ideasList.remove(idea);
		}



	}
})()

	