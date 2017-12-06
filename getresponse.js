angular.module('demo', [])
.controller('Hello', function($scope, $http) {
    $http.get('http://rest-service.guides.spring.io/greeting').
        then(function(response) {
            $scope.greeting = response.data;
        });
});
$(document).ready(function(){
			   $('#roomselect').change(function () {
			    var selection = this.value; //grab the value selected
			   alert(selection);
				}); 
			});