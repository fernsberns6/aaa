var myApp = angular.module('myApp', []);
myApp.controller('AppmntCtrl', ['$scope', '$http', function($scope, $http) {
	console.log("Hello World from controller");

var refresh=function(){
	$http.get('/ListOfAppointment').then(function(response){
		console.log("I got the data I requested");
		$scope.ListOfAppointment = response.data;
		$scope.Appointment=null;
	});
};
refresh();

$scope.addAppointment= function(){
	console.log($scope.Appointment);
	$http.post('/ListOfAppointment', $scope.Appointment).then(function(response){
		console.log(response);
		refresh();
	});
};

$scope.removeAppointment=function(id){
	console.log(id);
	$http.delete('/ListOfAppointment/'+id).then(function(response){
		refresh();
	});
};

$scope.editAppointment=function(id){
	console.log(id);
	$http.get('/ListOfAppointment/'+id).then(function(response){
		$scope.Appointment=response.data;
	});
};

$scope.updateAppointment=function(){
	console.log($scope.Appointment._id);
	$http.put('/ListOfAppointment/'+$scope.Appointment._id,$scope.Appointment).then(function(response){
		refresh();
	});
};


}]);

myApp.controller('DocCtrl', ['$scope', '$http', function($scope, $http) {
	console.log("Hello World from controller");
var refresh=function(){
	$http.get('/ListOfDoc').then(function(response){
		console.log("I got the data I requested");
		$scope.ListOfDoc = response.data;
		$scope.DoctorName=null;
	});
};
refresh();

$scope.addDoctor= function(){
	console.log($scope.DoctorName);
	$http.post('/ListOfDoc', $scope.DoctorName).then(function(response){
		console.log(response);
		refresh();
	});
};


$scope.removeDoctor=function(id){
	console.log(id);
	$http.delete('/ListOfDoc/'+id).then(function(response){
		refresh();
	});
};

$scope.editDoctor=function(id){
	console.log(id);
	$http.get('/ListOfDoc/'+id).then(function(response){
		$scope.DoctorName=response.data;
	});
};

$scope.updateDoctor=function(){
	console.log($scope.DoctorName._id);
	$http.put('/ListOfDoc/'+$scope.DoctorName._id,$scope.DoctorName).then(function(response){
		refresh();
	});
};


}]);
