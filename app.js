(function () {
	'use strict';

	angular.module('LunchCheck',[])

	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject =['$scope'];

	function LunchCheckController ($scope){
		$scope.item = '';
		$scope.msg = '';

		
		$scope.checkItems = function () {
			
			//display items on an alert window
			alert('Your Lunch Items: '+ $scope.item);
			
			//display items on console
			console.log ($scope.item);

			//validation
			if($scope.item !== '') {
				var arr = $scope.item.split(',');
				var counter =0; //count items
				
				for(var i =0; i<arr.length; i++){
					if(arr[i].trim() !=='')
						counter++;
				}

				if(counter > 0){

					if(counter <=3){
						$scope.msg = 'Enjoy!';
					}

					else if(counter > 3){
						$scope.msg = 'Too much!'
					}

					$scope.fontStyle = {
						"color":"green"
					};
					$scope.boxStyle = {
						"border-color":"green"
					};
				}
				else {
					enterItems();
				}
			}
			else {
				enterItems();
			}
		}
		
		var enterItems = function() {
			$scope.msg = 'Please enter data first';
				$scope.fontStyle = {
					"color":"red"
				};
				$scope.boxStyle = {
					"border-color":"red"
				};
		};
	}
})();