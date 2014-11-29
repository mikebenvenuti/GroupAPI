//  
angular.module('masterroute',['ngRoute'])
.config('SetRoutes')
.controller('myctrl',function($scope) {
    $scope.title ='test';});

function SetRoutes ($routeProvider)
{
$routeProvider.when('/', {
     template:  '<h1> home </h1>',
         controller:  'myctrl'

        })
        .when('/next',{
            template: '<h1> next </h1>',
            controller: 'myctrl'
        })
        .otherwise({redirectTo: '/'});


}
