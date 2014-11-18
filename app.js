//  
angular
    .module('app',['ui.router'])
    .config(Router)
    .controller('groupctrl',loadgroups);

function loadgroups(listofGroups) {

    var vm = this;
    vm.groups = listofGroups;
    vm.title = ' Groups';
}


function Router($urlRouterProvider,$stateProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home',{
            url: '/',
            templateUrl: 'templates/home.html'
        })

    .state('groups',{
        url: '/groups',
        templateUrl: 'templates/GroupView.html',
        controller: 'groupctrl as vm',
        resolve: {
            listofGroups:
                function ($http) {
                  return $http.get('//mike-pc:63109/api/webapi').then(
                    function (response) {
                        return response.data;
                    })
            }
        }
    });



}