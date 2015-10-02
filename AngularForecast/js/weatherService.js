var app = angular.module('weatherApp');

app.factory('getWeather', function($http){
  return function(lat, lng, done) {
    $http({method: 'GET', url: 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lng})
        .success(function(data, status, headers, config) {
          done(data.name, data.weather[0].description);
        })
        .error(function(data, status, headers, config) {
          throw new Error('Unable to get weather');
        });
  };
});