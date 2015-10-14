
(function() {
    'use strict';
angular
    .module('app')
    .controller('OpinionController', OpinionController);

	function OpinionController($meteor, $scope, $rootScope, $stateParams) { 

		var vm = this;

		vm.singleIdea = $scope.$meteorObject(Ideas, $stateParams.ideaId, false);
		$meteor.subscribe('oneIdea', $stateParams.ideaId);

		vm.parameters = {
			isViable : false,
			isUseful : false
		}

		vm.save = save;

		function save(){
			if(vm.parameters.isViable){
				vm.singleIdea.isViable.yes += 1;
			}else{
				vm.singleIdea.isViable.no += 1;
			}

			if(vm.parameters.isUseful){
				vm.singleIdea.isUseful.yes += 1;
			}else{
				vm.singleIdea.isUseful.no += 1;
			}

			vm.singleIdea.voted.push($rootScope.currentUser._id);
			vm.singleIdea.save();
		}


	}
})()

	