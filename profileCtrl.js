app.controller('profileCtrl' , ['$scope' , function($scope){
	console.log('profileCtrl is running...');

	$scope.profiles = [
					{ Id : 1 , Name : 'Fedous' , Address : 'Gulshan' },
					{ Id : 2 , Name : 'Sakib' , Address : 'Gulshan' },
					{ Id : 3 , Name : 'Shahjada' , Address : 'Uttara' }
				];
}]);