
(function() {
    'use strict';
angular
    .module('app')
    .controller('IdeasController', IdeasController);

	function IdeasController($meteor, $scope) { 

		var vm = this;
		vm.ideasList = $scope.$meteorCollection(Ideas);
		$meteor.subscribe('ideas');

		vm.createIdea = createIdea;
		vm.deleteIdea = deleteIdea

		function createIdea(idea){

			vm.ideasList.push(idea);
		}

		function deleteIdea(idea){
			vm.ideasList.remove(idea);
		}



	}
})()

	