//  
angular
    .module('app',['ngRoute'])
    .config(SetRoute)
    .controller('groupctrl',loadgroups)
    .controller('myctrl',function() {})
    .controller('toptenctrl',toptenctrl);


function toptenctrl() {
    var vm = this;

    vm.items = ['swab','tube','clothing','blood'];

    vm.bigitems = [
        {'casenum' : '14-0001', 'itemnum' : '1', 'item' : 'swab'},
        {'casenum' : '14-0001', 'itemnum' : '2', 'item' : 'tube'},
        {'casenum' : '14-0001', 'itemnum' : '3', 'item' : 'clothing'},
        {'casenum' : '14-0001', 'itemnum' : '4', 'item' : 'blood'},
        {'casenum' : '14-0002', 'itemnum' : '1', 'item' : 'swab(buccal)'},
        {'casenum' : '14-0003', 'itemnum' : '1', 'item' : 'tube: open'},
        {'casenum' : '14-0003', 'itemnum' : '2', 'item' : 'clothing:hat'},
        {'casenum' : '14-0004', 'itemnum' : '1', 'item' : 'knife'}
    ];


    vm.additem = function() {
        vm.items.push(vm.newitem);
        vm.newitem = '';
    };
    vm.removeitem = function(item){
        var i = vm.items.indexOf(item);
        vm.items.splice(i,1);
    };
    vm.removebigitem = function(item){
        var i = vm.bigitems.indexOf(item);
        vm.bigitems.splice(i,1);
    };
};

function SetRoute ($routeProvider)
{
    $routeProvider.when('/', {
        template:  '<h3> This is the view area </h3>',
        controller:  'myctrl'

    }).when('/ngtop10',{
            templateUrl: 'templates/topten.html',
            controller: 'toptenctrl as vm'
    }).otherwise({redirectTo: '/'});


};

function loadgroups(listofGroups) {

    var vm = this;
    vm.groups = listofGroups;
    vm.title = ' Groups';
}

/**
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



} */