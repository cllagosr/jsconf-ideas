
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
			
			idea.isViable = {"yes": 0, "no": 0};
			idea.isUseful = {"yes": 0, "no": 0};

			idea.voted = [];

			vm.ideasList.push(idea);
		}

		function deleteIdea(idea){
			vm.ideasList.remove(idea);
		}



	}
})()

	