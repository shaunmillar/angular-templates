var app = angular.module("weatherApp");

app.controller("MyCtrl", function($scope, getWeather) {
   
  // victoria	
   //var lat = 48.42;
   //var long = -123.36;
   
   $scope.doWeather = function() {
	   getWeather($scope.lat, $scope.long, function(location, weather) {
		   $scope.location = location;
       		$scope.weather = weather;
       });
   };
   
});
   
//   getWeather(lat, long, function(location, weather){
//	   $scope.location = location;
//       $scope.weather = weather;
//   });
   